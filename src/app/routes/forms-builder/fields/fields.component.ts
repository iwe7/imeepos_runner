import { Component, OnInit } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';
import { ActivatedRoute } from '@angular/router';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { map, tap, debounceTime, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CreateFieldComponent } from 'iwe7-forms-builder';

import { defaultsDeep } from 'lodash';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  users: Observable<any[]>;
  columns: SimpleTableColumn[] = [
    { title: '名称', index: 'name' },
    { title: '标题', index: 'title' },
    { title: '类型', index: 'type' },
    {
      title: '操作',
      buttons: [
        {
          text: '编辑',
          type: 'modal',
          component: CreateFieldComponent,
          click: (record: any, modal: any) => {
            const data = defaultsDeep(modal, record);
            this.http
              .post(this.url.getWebOpen('web/forms-builder/updateField'), {
                code: this.id,
                data: data,
              })
              .subscribe(res => {
                console.log(res);
              });
          },
        },
        {
          text: '删除',
          type: 'del',
          click: (record: any) => {},
        },
      ],
    },
  ];
  id: string;
  constructor(
    public route: ActivatedRoute,
    public url: Iwe7UrlService,
    public http: HttpClient,
    public modal: NzModalService,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.get();
    });
  }

  ngOnInit() {}

  get() {
    this.users = this.http
      .get(this.url.getWebOpen('web/forms-builder/get', { code: this.id }))
      .pipe(
        map((res: any) => res.data),
        map(res => res.schema),
        map(res => res.properties),
        map(res => {
          const users = [];
          for (const key in res) {
            users.push({
              name: key,
              ...res[key],
            });
          }
          return users;
        }),
        tap(res => console.log(res)),
      );
  }

  addField() {
    const modalRef = this.modal.create({
      nzContent: CreateFieldComponent,
      nzFooter: null,
    });
    modalRef.afterClose.pipe(filter(res => !!res)).subscribe(res => {
      this.http
        .post(this.url.getWebOpen('web/forms-builder/updateField'), {
          code: this.id,
          data: res,
        })
        .subscribe(res => {
          console.log(res);
        });
    });
  }
}
