import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { AccountService } from '@core/account.service';
import { map, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
@Component({
  selector: 'user-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.less'],
})
export class CenterComponent implements OnInit {
  accounts: any[] = [];
  constructor(
    public setting: SettingsService,
    public account: AccountService,
    public msg: NzMessageService,
  ) {}

  ngOnInit() {
    this.account
      .list()
      .pipe(
        map((res: any) => res.data),
        map(res => res.list),
        map(res => {
          const ress = [];
          for (const key in res) {
            if (res[key].level === '4') {
              res[key].description = '认证服务号';
            } else if (res[key].level === '3') {
              res[key].description = '认证订阅号';
            } else if (res[key].level === '2') {
              res[key].description = '普通服务号';
            } else if (res[key].level === '1') {
              res[key].description = '普通订阅号';
            } else {
              res[key].description = '未知类型';
            }
            ress.push(res[key]);
          }
          return ress;
        }),
      )
      .subscribe(res => {
        this.accounts = res;
        console.log(res);
      });
  }
}
