import { Directive, ElementRef, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({ selector: '[getElementRef]' })
export class GetElementRefDirective implements OnInit {
  @Output() getElementRef: EventEmitter<any> = new EventEmitter();
  constructor(public ele: ElementRef) {}

  ngOnInit() {
    this.getElementRef.emit(this.ele);
  }
}
