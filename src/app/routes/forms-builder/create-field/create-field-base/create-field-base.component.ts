import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SFSchema, SFSchemaEnumType, SFButton } from '@delon/form';

@Component({
  selector: 'create-field-base',
  templateUrl: './create-field-base.component.html',
  styleUrls: ['./create-field-base.component.css'],
})
export class CreateFieldBaseComponent implements OnInit {
  schema: SFSchema = {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: '名称',
        ui: {
          placeholder: '请输入字段名称',
        },
      },
      type: {
        type: 'string',
        title: '名称',
        default: 'object',
        enum: [
          {
            value: 'number',
            label: '数字',
          },
          {
            value: 'string',
            label: '字符串',
          },
          {
            value: 'boolean',
            label: '布尔',
          },
          {
            value: 'object',
            label: '结构',
          },
          {
            value: 'array',
            label: '数组',
          },
        ],
        ui: {
          placeholder: '请输入字段名称',
          widget: 'select',
        },
      },
    },
  };

  button: SFButton = {
    submit: '下一步',
  };

  @Output() onNext: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  next(e: any) {
    this.onNext.emit(e);
  }

  back(e: any) {
    console.log(e);
  }
}
