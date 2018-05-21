import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Location } from '@angular/common';
import { SFSchema, SFButton, SFComponent } from '@delon/form';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { CreateFieldComponent } from '../create-field/create-field.component';
import { filter, map } from 'rxjs/operators';
import { defaultsDeep } from 'lodash';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @Input()
  schema: SFSchema = {
    type: 'object',
    title: '表单信息',
    properties: {
      action: {
        type: 'string',
        title: '提交地址',
        ui: {
          placeholder: '请输入提交地址',
          widget: 'string',
        },
      },
      title: {
        type: 'string',
        title: '表单名称',
        ui: {
          placeholder: '请输入表单名称',
          widget: 'string',
        },
      },
      desc: {
        type: 'string',
        title: '表单备注',
        ui: {
          placeholder: '请输入表单备注',
          widget: 'string',
        },
      },
      code: {
        type: 'string',
        title: '表单代号',
        default: 'forms_' + new Date().getTime(),
        ui: {
          placeholder: '请输入英文字符作为唯一标识',
          widget: 'string',
        },
      },
      mode: {
        type: 'string',
        title: '模式',
        default: 'default',
        enum: [
          {
            label: '默认',
            value: 'default',
          },
          {
            label: '搜索',
            value: 'search',
          },
          {
            label: '编辑',
            value: 'edit',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      layout: {
        type: 'string',
        title: '布局',
        default: 'horizontal',
        enum: [
          {
            label: '水平',
            value: 'horizontal',
          },
          {
            label: '垂直',
            value: 'vertical',
          },
          {
            label: '行内',
            value: 'inline',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      autocomplete: {
        type: 'string',
        title: '自动补全',
        default: 'on',
        enum: [
          {
            label: '开启',
            value: 'on',
          },
          {
            label: '关闭',
            value: 'off',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      firstVisual: {
        type: 'boolean',
        title: '立即显示',
        default: true,
      },
      liveValidate: {
        type: 'boolean',
        title: '实时校验',
        default: true,
      },
      button: {
        type: 'object',
        title: '按钮设置',
        properties: {
          submit: {
            type: 'string',
            title: '提交按钮',
            default: '保存',
          },
          reset: {
            type: 'string',
            title: '重置按钮',
            default: '重置',
          },
        },
      },
    },
    required: ['action', 'code', 'title', 'desc'],
  };

  button: SFButton = {
    submit: '添加字段',
    reset: null,
  };

  formData: any = {};

  id: string;
  constructor(
    public modal: NzModalService,
    public url: Iwe7UrlService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public cd: ChangeDetectorRef,
    public router: Router,
    public location: Location,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      if (this.id) {
        this.http
          .get(this.url.getWebOpen('web/forms-builder/get', { code: this.id }))
          .pipe(map((res: any) => res.data))
          .subscribe((res: any) => {
            this.formData = {
              code: res.code,
              title: res.title,
              desc: res.desc,
              button: res.button,
              action: res.action,
            };
          });
      }
    });
  }

  ngOnInit() {}

  submit(e: any) {
    let schema: any = {
      type: 'object',
    };
    let formData: any = {};
    if (e.code === 'formsBuilderSave') {
      schema = this.schema;
      formData = this.formData;
    }
    this.http
      .post(this.url.getOpenUrl('web/forms-builder/save'), {
        form: e,
        schema: schema,
        formData: formData,
      })
      .subscribe(res => {
        this.location.back();
      });
  }

  createModal: NzModalRef;
  createFormItem() {
    this.formData = this.sf.value;
    this.createModal = this.modal.create({
      nzTitle: '添加项目',
      nzContent: CreateFieldComponent,
      nzFooter: null,
    });
    this.createModal.afterClose.pipe(filter(res => !!res)).subscribe(res => {
      this.schema = defaultsDeep(
        {
          properties: {
            ...this.schema.properties,
            [`${res['name']}`]: res,
          },
        },
        this.schema,
      );
      this.sf.refreshSchema(this.schema);
      console.log(this.schema);
    });
  }
  @ViewChild('sf', {
    read: SFComponent,
  })
  sf: SFComponent;
  createForm() {
    this.sf.reset();
  }
}
