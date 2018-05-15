import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { SettingsService } from '@delon/theme';
import { AccountService } from '@core/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(
    public settings: SettingsService,
    public msgSrv: NzMessageService,
    public account: AccountService,
    public msg: NzMessageService
  ) {
  }

  switchAccount(item: any) {
    this.account.switchAccount(item);
    this.msg.success('切换成功');
  }
}
