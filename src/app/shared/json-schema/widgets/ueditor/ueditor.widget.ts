import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ControlWidget } from '@delon/form';
import { UrlService } from '@core/url.service';
import { UEditorComponent } from 'ngx-ueditor';
declare const UE: any;
@Component({
  selector: 'sf-ueditor',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ueditor
      [ngModel]="value"
      [config]="config"
      [loadingTip]="loading"
      (ngModelChange)="change($event)" (onPreReady)="onPreReady($event)">
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

  constructor(cd: ChangeDetectorRef, private url: UrlService) {
    super(cd);
  }

  ngOnInit(): void {
    this.loading = this.ui.loading || '加载中……';
    this.config = {
      ...this.ui.config,
      ...{
        serverUrl: this.url.getWebOpen('web/ueditor/server'),
        imageUrl: this.url.getWebOpen('web/ueditor/image'),
        imagePath: `${this.url.root}`,
        lang: 'zh-cn',
      },
    };
  }

  onPreReady(comp: UEditorComponent) {
    // UE.plugin.register('simpleupload',()=>{});
  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
