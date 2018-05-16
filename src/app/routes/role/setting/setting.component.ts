import { Component, OnInit } from '@angular/core';
import { RoleService } from '@core/role.service';
import * as _ from 'lodash';
@Component({
  selector: 'setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less'],
})
export class SettingComponent implements OnInit {
  _list: any = [];

  get list() {
    return [...this._list];
  }
  constructor(public role: RoleService) {
    this._list = _.defaultsDeep([], this.role.promises);
  }

  ngOnInit() {}
}
