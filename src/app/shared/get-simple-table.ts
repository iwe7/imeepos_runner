import { Directive, OnInit, Output, EventEmitter } from '@angular/core';
import { SimpleTableComponent } from '@delon/abc';

@Directive({ selector: '[getSimpleTable]' })
export class GetSimpleTableDirective implements OnInit {
  @Output() getSimpleTable: EventEmitter<SimpleTableComponent> = new EventEmitter();
  constructor(public st: SimpleTableComponent) {}

  ngOnInit() {
    this.getSimpleTable.emit(this.st);
  }
}
