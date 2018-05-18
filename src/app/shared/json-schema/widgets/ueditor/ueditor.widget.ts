import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ControlWidget, SFComponent } from '@delon/form';
import { UrlService } from '@core/url.service';
import { UEditorComponent } from 'iwe7-editor';
declare const UE: any;
@Component({
  selector: 'sf-ueditor',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <neditor #editor
      [ngModel]="value"
      [option]="config"
      (ngModelChange)="change($event)" (onPreReady)="onPreReady($event)">
    </neditor>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  styles: [`:host ueditor { line-height:normal; }`],
})
// tslint:disable-next-line:component-class-suffix
export class UeditorWidget extends ControlWidget
  implements OnInit, AfterViewInit {
  static readonly KEY = 'ueditor';
  config: any = {};
  _default: any;
  loading: string;

  @ViewChild('editor', {
    read: UEditorComponent,
  })
  editor: UEditorComponent;

  constructor(
    cd: ChangeDetectorRef,
    private url: UrlService,
    public sf: SFComponent,
  ) {
    super(cd, sf);
  }

  ngOnInit(): void {
    this.loading = this.ui.loading || '加载中……';
    this.config = {
      ...this.ui.config,
      ...{
        serverUrl: this.url.getWebOpen('web/ueditor/server'),
        UEDITOR_HOME_URL: `${this.url.root}addons/runner_open/assets/neditor/`,
      },
    };
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }

  onPreReady(comp: UEditorComponent) {
    // UE.plugin.register('simpleupload',()=>{});
  }

  change(value: string) {
    if (this.ui.change) this.ui.change(value);
    this.setValue(value);
  }
}
