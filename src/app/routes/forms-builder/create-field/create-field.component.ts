import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css'],
})
export class CreateFieldComponent implements OnInit {
  step: number = 0;

  result: any = {};
  constructor() {}

  ngOnInit() {}

  onNext(e: any) {
    this.result = { ...this.result, ...e };
    this.step ++;
    console.log(this.result);
  }
}
