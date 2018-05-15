import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Component({
  selector: 'header-user',
  template: `
  <nz-dropdown nzPlacement="bottomRight">
    <div class="item d-flex align-items-center px-sm" nz-dropdown>
      <nz-avatar [nzSrc]="settings.user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{settings.user.name}}
    </div>
    <div nz-menu class="width-sm">
      <div nz-menu-item (click)="userCenter()"><i class="anticon anticon-user mr-sm"></i>{{'user-center'|translate}}</div>
      <div nz-menu-item (click)="userSetting()"><i class="anticon anticon-setting mr-sm"></i>{{'user-setting'|translate}}</div>
      <li nz-menu-divider></li>
      <div nz-menu-item (click)="logout()"><i class="anticon anticon-setting mr-sm"></i>{{'user-logout'|translate}}</div>
    </div>
  </nz-dropdown>
  `,
})
export class HeaderUserComponent implements OnInit {
  constructor(
    public settings: SettingsService,
    private router: Router,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
  ) {}

  ngOnInit(): void {
    this.tokenService.change().subscribe((res: any) => {
      this.settings.setUser(res);
    });
    // mock
    const token = this.tokenService.get() || {
      token: 'nothing',
      name: 'Admin',
      avatar: './assets/_/img/zorro.svg',
      email: 'cipchk@qq.com',
    };
    this.tokenService.set(token);
  }

  userCenter() {
    this.router.navigateByUrl('/user/center');
  }

  userSetting() {
    this.router.navigateByUrl('/user/setting');
  }

  logout() {
    this.tokenService.clear();
    this.router.navigateByUrl(this.tokenService.login_url);
  }
}
