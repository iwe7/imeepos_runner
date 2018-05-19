import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-tinymce',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <colok-picker></colok-picker>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line:component-class-suffix
export class ColokPickerWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'colokpicker';

  ngOnInit(): void {}

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
