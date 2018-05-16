import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'role-setting',
  templateUrl: './role-setting.component.html',
  styleUrls: ['./role-setting.component.css'],
})
export class RoleSettingComponent implements OnInit {
  @Input() list: any[] = [];
  constructor() {}

  ngOnInit() {}

  select(e: any) {}

  change(e: any) {
    console.log(e);
  }
}
