import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Input,
  ViewChild,
} from '@angular/core';
import { SFSchema, SFButton, SFComponent } from '@delon/form';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { CreateFieldComponent } from '../create-field/create-field.component';
import { filter } from 'rxjs/operators';
import { defaultsDeep } from 'lodash';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @Input()
  schema: SFSchema = {
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
    },
    required: ['action', 'code'],
  };

  button: SFButton = {
    submit: '添加字段',
    reset: null,
  };

  constructor(public modal: NzModalService, public cd: ChangeDetectorRef) {}

  ngOnInit() {}

  submit(e: any) {
    this.createFormItem();
  }

  createModal: NzModalRef;
  createFormItem() {
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
      this.schema = {
        ...this.schema,
      };
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
