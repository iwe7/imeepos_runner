import {
  Component,
  OnInit,
  HostBinding,
  Inject,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Iwe7ScriptService } from 'iwe7-script';
import { Iwe7UrlService } from 'iwe7-url';
@Component({
  selector: 'edui-box-icon',
  templateUrl: './edui-box-icon.component.html',
  styleUrls: ['./edui-box-icon.component.scss'],
})
export class EduiBoxIconComponent implements OnInit {
  @HostBinding('class.edui-box') _box: boolean = true;
  @HostBinding('class.edui-icon') _icon: boolean = true;
  @HostBinding('class.edui-notadd') _notadd: boolean = true;
  id: string;
  @Input() name: string;
  get _url() {
    return `${this.url.root}addons/runner_open/assets/svgs/${this.name}.svg`;
  }
  constructor(public url: Iwe7UrlService) {}
  ngOnInit() {}
}
