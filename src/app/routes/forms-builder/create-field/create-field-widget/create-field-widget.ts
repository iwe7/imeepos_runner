import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SFSchema, SFSchemaEnumType, SFButton } from '@delon/form';

@Component({
  selector: 'create-field-widget',
  templateUrl: './create-field-widget.html',
  styleUrls: ['./create-field-widget.scss'],
})
export class CreateFieldWidgetComponent implements OnInit {
  schema: SFSchema = {
    type: 'object',
    properties: {
      widget: {
        type: 'string',
        title: '部件',
        default: 'string',
        enum: [
          {
            label: '数组',
            value: 'array',
          },
          {
            label: '自动完成',
            value: 'autocomplete',
          },
          {
            label: '开关',
            value: 'boolean',
          },
          {
            label: '级联选择',
            value: 'cascader',
          },
          {
            label: '多选框',
            value: 'checkbox',
          },
          {
            label: '日期',
            value: 'date',
          },
          {
            label: '提及',
            value: 'mention',
          },
          {
            label: '数字',
            value: 'number',
          },
          {
            label: '对象',
            value: 'object',
          },
          {
            label: '单选组',
            value: 'radio',
          },
          {
            label: '滑动输入条',
            value: 'range',
          },
          {
            label: '评分',
            value: 'rate',
          },
          {
            label: '选择器',
            value: 'select',
          },
          {
            label: '文本框',
            value: 'string',
          },
          {
            label: '热门标签',
            value: 'tag',
          },
          {
            label: '多行文本框',
            value: 'textarea',
          },
          {
            label: '时间',
            value: 'time',
          },
          {
            label: '穿梭框',
            value: 'transfer',
          },
          {
            label: '上传',
            value: 'upload',
          },
          {
            label: 'Ueditor富文本',
            value: 'ueditor',
          },
          {
            label: 'Tinymce富文本',
            value: 'tinymce',
          },
          {
            label: '图标',
            value: 'iconpicker',
          },
          {
            label: '颜色',
            value: 'colorpicker',
          },
          {
            label: '时间选择',
            value: 'clockpicker',
          },
        ],
      },
    },
  };

  button: SFButton = {
    submit: '下一步',
  };

  constructor() {}

  ngOnInit() {}

  @Output() onNext: EventEmitter<any> = new EventEmitter();

  next(e: any) {
    this.onNext.emit(e);
  }

  back(e: any) {
    console.log(e);
  }
}
