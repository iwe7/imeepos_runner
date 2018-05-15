import { Component, OnInit } from '@angular/core';
import { SettingsService } from '@delon/theme';
import { AccountService } from '@core/account.service';

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
  ) {}

  ngOnInit() {
    this.account.list().subscribe(res => {
      console.log(res);
    });
  }
}
