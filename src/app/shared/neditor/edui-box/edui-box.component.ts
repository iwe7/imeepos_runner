import {
  Component,
  OnInit,
  HostBinding,
  ElementRef,
  Renderer2,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'edui-box',
  templateUrl: './edui-box.component.html',
  styleUrls: ['./edui-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EduiBoxComponent implements OnInit {
  @HostBinding('class.edui-box') _box: boolean = true;
  @HostBinding('class.edui-notadd') _notadd: boolean = true;

  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;

  _type: string;
  @Input()
  set type(val: string) {
    if (this._type) {
      this.render.removeClass(this.ele.nativeElement, `edui-${this._type}`);
    } else {
      this.render.addClass(this.ele.nativeElement, `edui-${val}`);
      this._type = val;
    }
  }
  get type() {
    return this._type;
  }

  _for: string;
  @Input()
  set for(val: string) {
    if (this._for) {
      this.render.removeClass(this.ele.nativeElement, `edui-for-${this._for}`);
    } else {
      this.render.addClass(this.ele.nativeElement, `edui-form-${val}`);
      this._for = val;
    }
  }
  get for() {
    return this._for;
  }
  constructor(public ele: ElementRef, public render: Renderer2) {
    this.type = 'button';
    this.for = 'source';
  }

  ngOnInit() {}
}
