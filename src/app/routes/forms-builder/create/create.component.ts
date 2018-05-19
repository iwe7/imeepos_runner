import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  schema: SFSchema = {
    properties: {},
  };
  constructor() {}

  ngOnInit() {}

  submit() {}

  createFormItem() {}
}
