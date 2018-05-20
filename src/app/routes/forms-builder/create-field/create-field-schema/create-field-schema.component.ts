import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SFSchema, SFSchemaEnumType, SFButton } from '@delon/form';

@Component({
  selector: 'create-field-schema',
  templateUrl: './create-field-schema.component.html',
  styleUrls: ['./create-field-schema.component.css'],
})
export class CreateFieldSchemaComponent implements OnInit {
  schema: SFSchema = {
    type: 'object',
    properties: {},
  };

  button: SFButton = {
    submit: '下一步',
  };

  @Input()
  set type(val: string) {
    this.schema.properties = this[val]();
  }

  @Output() onNext: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  string() {
    return {
      maxLength: {
        type: 'number',
        title: '表单最大长度',
      },
      readOnly: {
        type: 'boolean',
        title: '禁用状态',
      },
    };
  }

  number() {
    return {
      minimum: {
        type: 'number',
        title: '最小值',
      },
      exclusiveMinimum: {
        type: 'boolean',
        title: '最小值开关',
      },
      maximum: {
        type: 'number',
        title: '最大值',
      },
      exclusiveMaximum: {
        type: 'boolean',
        title: '最大值开关',
      },
      multipleOf: {
        type: 'number',
        title: '倍数',
      },
    };
  }

  next(e: any) {
    this.onNext.emit(e);
  }
}
