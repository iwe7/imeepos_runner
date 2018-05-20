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
      code: {
        type: 'string',
        title: '表单代号',
        ui: {
          placeholder: '请输入英文字符作为唯一标识',
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
            this.formData = res.form;
          });
      }
    });
  }

  ngOnInit() {}

  submit(e: any) {
    let schema: any = {
      type: 'object',
    };
    if (e.code === 'formsBuilderSave') {
      schema = this.schema;
    }
    this.http
      .post(this.url.getOpenUrl('web/forms-builder/save'), {
        form: e,
        schema: schema,
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
      this.schema = defaultsDeep(this.schema, {
        properties: {
          ...this.schema.properties,
          [`${res['name']}`]: res,
        },
      });
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
