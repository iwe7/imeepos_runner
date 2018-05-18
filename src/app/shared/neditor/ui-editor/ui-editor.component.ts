import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { Iwe7ScriptService } from 'iwe7-script';
import { UrlService } from '@core/url.service';
declare const UE: any;
@Component({
  selector: 'ui-editor',
  templateUrl: './ui-editor.component.html',
  styleUrls: ['./ui-editor.component.css'],
})
export class UiEditorComponent implements OnInit {
  @Input() options: any = {};
  editor: any;

  constructor(
    public _render: Renderer2,
    public _ele: ElementRef,
    public script: Iwe7ScriptService,
    public url: UrlService,
  ) {}

  ngOnInit() {
    this.script
      .load([
        `${this.url.root}addons/runner_open/assets/neditor/neditor.config.js`,
        `${this.url.root}addons/runner_open/assets/neditor/neditor.all.js`,
        `${this.url.root}addons/runner_open/assets/neditor/i18n/zh-cn/zh-cn.js`,
      ])
      .subscribe(res => {
        this.editor = UE.getEditor(this._ele.nativeElement, this.options);
      });
  }
}
