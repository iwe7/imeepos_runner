import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { AccountService } from '@core/account.service';
import { map, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { UrlService } from '@core/url.service';
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
    public url: UrlService,
  ) {}

  switchAccount(item: any) {
    this.account.switchAccount(item);
    this.msg.success('切换成功');
  }

  ngOnInit() {
    this.account
      .list()
      .subscribe(res => {
        this.accounts = res;
        this.account.setAccounts(res);
      });
  }
}
