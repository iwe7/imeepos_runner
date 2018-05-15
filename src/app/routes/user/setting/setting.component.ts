import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less'],
})
export class SettingComponent implements OnInit {
  active: number = 1;
  profileForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.profileForm = this.fb.group({});
  }

  ngOnInit() {}
}
