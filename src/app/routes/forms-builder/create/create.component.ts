import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SFSchema, SFButton } from '@delon/form';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
import { CreateFieldComponent } from '../create-field/create-field.component';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      action: {
        type: 'string',
        title: '表单提交地址',
        ui: {
          placeholder: '请输入提交地址',
        },
      },
      code: {
        type: 'string',
        title: '代号',
        ui: {
          placeholder: '请输入英文字符作为唯一标识',
        },
      },
      select: {
        type: 'string',
        title: '状态',
        enum: [
          { label: '待支付', value: 'WAIT_BUYER_PAY' },
          { label: '已支付', value: 'TRADE_SUCCESS' },
          { label: '交易完成', value: 'TRADE_FINISHED' },
        ],
        default: 'WAIT_BUYER_PAY',
        ui: {
          widget: 'select',
        },
      },
    },
  };

  button: SFButton = {
    submit: '保存表单',
  };

  constructor(public modal: NzModalService, public cd: ChangeDetectorRef) {}

  ngOnInit() {}

  submit(e: any) {
    console.log(e);
  }

  createModal: NzModalRef;
  createFormItem() {
    this.createModal = this.modal.create({
      nzTitle: '添加项目',
      nzContent: CreateFieldComponent,
      nzFooter: null,
    });
    this.createModal.afterClose.pipe(filter(res => !!res)).subscribe(res => {
      const name = res['name'];
      delete res[name];
      this.schema = {
        ...this.schema,
        ...{
          properties: {
            ...this.schema.properties,
            ...{
              [`${name}`]: res,
            },
          },
        },
      };
    });
  }
}
