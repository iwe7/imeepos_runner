import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import { SFSchema } from '@delon/form';
@Component({
  selector: 'edit-notice',
  templateUrl: './edit-notice.component.html',
  styleUrls: ['./edit-notice.component.css'],
})
export class EditNoticeComponent {
  @Input()
  set record(record: any) {
    for (const key in record) {
      this.schema.properties[key].default = record[key];
    }
  }
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '公告标题',
        ui: {
          placeholder: '请输入公告标题',
        },
      },
      coachtime: {
        type: 'string',
        title: '时间',
        ui: {
          placeholder: '请选择时间',
          widget: 'colokpicker'
        },
      },
      content: {
        type: 'string',
        title: '公告内容',
        ui: {
          widget: 'ueditor',
        },
      },
    },
    required: ['title', 'content'],
  };
  constructor(private modal: NzModalRef) {}

  submit(e: any) {
    this.modal.destroy(e);
  }
}
