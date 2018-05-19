import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  TemplateRef,
} from '@angular/core';
import { ControlWidget } from '@delon/form';
import { fromEvent } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';
@Component({
  selector: 'sf-iconpicker',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <nz-input-group [nzAddOnBeforeIcon]="value">
      <input nz-input #input type="text" [(ngModel)]="value"/>
    </nz-input-group>
    <ng-template #picker>
      <antd-icon-picker
        [ngModel]="value"
        (ngModelChange)="change($event)">
          <ng-template let-icon>
            <a nz-button nzShape="circle" [class.active]="value === 'anticon anticon-'+icon">
              <i class="anticon anticon-{{icon}}"></i>
            </a>
          </ng-template>
      </antd-icon-picker>
    </ng-template>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line:component-class-suffix
export class IconPickerWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'iconpicker';
  @ViewChild('input') input: ElementRef;
  @ViewChild('picker', {
    read: TemplateRef,
  })
  iconPicker: TemplateRef<any>;
  iconPickerModal: NzModalRef;
  constructor(public modal: NzModalService, cd: ChangeDetectorRef) {
    super(cd);
  }
  ngOnInit(): void {
    fromEvent(this.input.nativeElement, 'click').subscribe(res => {
      this.showIconPicker();
    });
  }

  showIconPicker() {
    this.iconPickerModal = this.modal.create({
      nzTitle: '选择图标',
      nzContent: this.iconPicker,
      nzFooter: null,
    });
  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
    this.iconPickerModal.close();
  }
}
