import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SFSchema, SFSchemaEnumType, SFButton } from '@delon/form';

@Component({
  selector: 'create-field-ui',
  templateUrl: './create-field-ui.component.html',
  styleUrls: ['./create-field-ui.component.css'],
})
export class CreateFieldUiComponent implements OnInit {
  schema: SFSchema = {
    type: 'object',
    properties: {},
  };

  button: SFButton = {
    submit: '完成',
  };

  _type: string;
  @Input()
  set type(val: string) {
    this._type = val;
    this.schema.properties = this[val]();
  }

  @Output() onNext: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  string() {
    return {
      type: {
        type: 'string',
        title: '类型',
      },
      placeholder: {
        type: 'string',
        title: '显示提示讯息',
      },
      addOnBefore: {
        type: 'string',
        title: '前置标签',
      },
      addOnAfter: {
        type: 'string',
        title: '后缀标签',
      },
      addOnBeforeIcon: {
        type: 'string',
        title: '前置Icon',
        ui: {
          widget: 'iconpicker',
        },
      },
      addOnAfterIcon: {
        type: 'string',
        title: '后置Icon',
        ui: {
          widget: 'iconpicker',
        }
      },
      prefix: {
        type: 'string',
        title: '前缀标签',
      },
      prefixIcon: {
        type: 'string',
        title: '前缀图标',
        ui: {
          widget: 'iconpicker',
        }
      },
      suffix: {
        type: 'string',
        title: '后缀标签',
      },
      suffixIcon: {
        type: 'string',
        title: '后缀图标',
        ui: {
          widget: 'iconpicker',
        }
      },
    };
  }

  number() {
    return {
      formatter: {
        type: 'string',
        default: `{value}`,
        title: '格式化',
      },
      parser: {
        type: 'string',
        default: `{value}`,
        title: '解析',
      },
      precision: {
        type: 'number',
        title: '数值精度',
      },
    };
  }

  next(e: any) {
    if (this._type === 'number') {
      const { formatter, parser } = e;
      e.formatter = (value: any) => {
        return formatter.replace('{value}', value);
      };
      e.parser = (value: any) => {
        return parser.replace('{value}', value);
      };
    }
    this.onNext.emit(e);
  }
}
