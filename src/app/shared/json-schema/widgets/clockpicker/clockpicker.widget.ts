import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';

@Component({
  selector: 'sf-clockpicker',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <clock-picker></clock-picker>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line:component-class-suffix
export class ClockPickerWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'clockpicker';

  ngOnInit(): void {}

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
