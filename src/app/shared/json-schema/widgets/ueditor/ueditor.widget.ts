import { Component, OnInit } from '@angular/core';
import { ControlWidget } from '@delon/form';
import { UrlService } from '@core/url.service';
@Component({
  selector: 'sf-ueditor',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ueditor
      [ngModel]="value"
      [config]="config"
      [loadingTip]="loading"
      (ngModelChange)="change($event)">
    </ueditor>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  styles: [`:host ueditor { line-height:normal; }`],
})
// tslint:disable-next-line:component-class-suffix
export class UeditorWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'ueditor';
  config: any = {};
  _default: any;
  loading: string;

  constructor(private url: UrlService){
    super();
  }

  ngOnInit(): void {
    this.loading = this.ui.loading || '加载中……';
    this.config = {
      ...this.ui.config,
      ...{
        serverUrl: this.url.getWebOpen('web/ueditor/server'),
        imageUrl: this.url.getWebOpen('web/ueditor/image'),
        imagePath: `${this.url.root}attachment/`,
        lang: 'zh-cn',
      },
    };
  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
