import {
  Component,
  OnInit,
  Input,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  SimpleTableColumn,
  SimpleTableChange,
  SimpleTableFilter,
  SimpleTableButton,
  SimpleTableComponent,
} from '@delon/abc';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { EditNoticeComponent } from '@shared/modal/edit-notice/edit-notice.component';
import { SFSchema } from '@delon/form';
import { UrlService } from '@core/url.service';
import { filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css'],
})
export class NoticeComponent implements OnInit {
  params: any = {};
  resReName: any = { list: 'data' };
  url: string = ``;
  @ViewChild('st') st: SimpleTableComponent;
  config = {
    serverUrl: this._url.getWebOpen('web/ueditor/server'),
    UEDITOR_HOME_URL: `${this._url.root}addons/runner_open/assets/neditor/`,
  };
  searchSchema: SFSchema = {
    properties: {
      id: {
        type: 'number',
        title: '编号',
      },
      title: {
        type: 'string',
        title: '标题',
      },
    },
  };
  constructor(
    private message: NzMessageService,
    public _url: UrlService,
    public modal: NzModalService,
    public http: HttpClient,
  ) {
    this.url = this._url.getWebOpen('web/cms/notice');
  }
  columns: SimpleTableColumn[] = [
    { title: '编号', index: 'id' },
    { title: '标题', index: 'title' },
    { title: '内容', index: 'desc' },
    {
      title: '操作区',
      buttons: [
        {
          text: '删除',
          type: 'del',
          click: (record: any) =>
            this.message.success(`成功删除【${record.name}】`),
          if: (item: any, btn: SimpleTableButton, column: SimpleTableColumn) =>
            item.id % 2 === 0,
        },
        {
          text: '编辑',
          type: 'modal',
          component: EditNoticeComponent,
          click: (record: any, modal: any) =>
            this.message.success(
              `重新加载页面，回传值：${JSON.stringify(modal)}`,
            ),
          modalOptions: {
            nzTitle: '添加公告',
            nzFooter: [],
          },
        },
        {
          text: '更多',
          children: [
            {
              text: `过期`,
              click: (record: any) =>
                this.message.error(`过期【${record.name}】`),
              format: (record: any) =>
                `<i class="anticon anticon-frown-o"></i> 过期`,
            },
            {
              text: `重新开始`,
              click: (record: any) =>
                this.message.success(`重新开始【${record.name}】`),
            },
          ],
        },
      ],
    },
  ];

  ngOnInit() {}

  addNotice(tpl: TemplateRef<any>) {
    const ref = this.modal.create({
      nzTitle: '添加公告',
      nzContent: EditNoticeComponent,
      nzComponentParams: {
        record: {
          title: '',
          content: '',
        },
      },
      nzFooter: null,
    });
    ref.afterClose
      .pipe(
        tap(res => {
          ref.destroy();
        }),
        filter(res => !!res),
        switchMap(res => {
          return this.http.post(this._url.getWebOpen('web/cms/notice'), res, {
            params: { op: 'add' },
          });
        }),
      )
      .subscribe(res => {
        console.log(res);
      });
  }
}
