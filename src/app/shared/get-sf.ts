import { Directive, OnInit, Output, EventEmitter } from '@angular/core';
import { SFComponent } from '@delon/form';

@Directive({ selector: '[getSf]' })
export class GetSfDirective implements OnInit {
  @Output() getSf: EventEmitter<SFComponent> = new EventEmitter();
  constructor(public sf: SFComponent) {}

  ngOnInit() {
    this.getSf.emit(this.sf);
  }
}
