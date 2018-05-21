import { Component, OnInit, Input } from '@angular/core';
import { SFSchema } from '@delon/form';
import { NzModalRef } from 'ng-zorro-antd';
import { defaultsDeep } from 'lodash';
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

  @Input() record: any;

  constructor(public modal: NzModalRef) {}

  ngOnInit() {
    console.log(this);
  }

  onNext(e: any) {
    if (this.step === 3) {
      this.result = defaultsDeep(e, this.result);
      this.modal.close(this.result);
      return;
    }
    this.result = defaultsDeep(e, this.result);
    this.step++;
  }
}
