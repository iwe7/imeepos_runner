import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'create-field',
  templateUrl: './create-field.component.html',
  styleUrls: ['./create-field.component.css'],
})
export class CreateFieldComponent implements OnInit {
  step: number = 0;

  result: any = {
    ui: {},
  };
  constructor(public modal: NzModalRef) {}

  ngOnInit() {}

  onNext(e: any) {
    if (this.step === 3) {
      this.result = {
        ...this.result,
        ...{ ui: e },
      };
      this.modal.close(this.result);
    } else {
      this.result = { ...this.result, ...e };
    }
    this.step++;
  }
}
