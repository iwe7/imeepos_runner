import { Component } from '@angular/core';

@Component({
  selector: 'header-icon',
  template: `
  <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
    <div class="item" nz-dropdown>
      <i class="anticon anticon-appstore-o"></i>
    </div>
    <div nz-menu class="wd-xl animated jello">
      <nz-spin [nzSpinning]="loading" [nzTip]="'正在读取数据...'">
        <div nz-row [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="app-icons">
          <div nz-col [nzSpan]="6" (click)="platform()">
            <i class="anticon anticon-calendar bg-error text-white"></i>
            <small>公众号</small>
          </div>
          <div nz-col (click)="wxapp()" [nzSpan]="6">
            <i class="anticon anticon-file bg-teal text-white"></i>
            <small>小程序</small>
          </div>
          <div nz-col (click)="webapp()" [nzSpan]="6">
            <i class="anticon anticon-cloud bg-success text-white"></i>
            <small>PC</small>
          </div>
          <div nz-col (click)="module()" [nzSpan]="6">
            <i class="anticon anticon-star-o bg-magenta text-white"></i>
            <small>应用</small>
          </div>
          <div nz-col (click)="welcome()" [nzSpan]="6">
            <i class="anticon anticon-team bg-purple text-white"></i>
            <small>系统</small>
          </div>
          <div nz-col (click)="upgrade()" [nzSpan]="6">
            <i class="anticon anticon-scan bg-warning text-white"></i>
            <small>站点</small>
          </div>
          <div nz-col (click)="adv()" [nzSpan]="6">
            <i class="anticon anticon-pay-circle-o bg-cyan text-white"></i>
            <small>广告联盟</small>
          </div>
          <div nz-col (click)="help()" [nzSpan]="6">
            <i class="anticon anticon-printer bg-grey text-white"></i>
            <small>帮助系统</small>
          </div>
        </div>
      </nz-spin>
    </div>
  </nz-dropdown>
  `,
  styles: [
    `
    .bg-teal{
      background-color: #714848;
    }
    `,
  ],
})
export class HeaderIconComponent {
  loading = true;

  change() {
    setTimeout(() => (this.loading = false), 500);
  }

  platform() {
    location.href = './index.php?c=home&a=welcome&do=platform&';
  }
  wxapp() {
    location.href = './index.php?c=wxapp&a=display&';
  }
  webapp() {
    location.href = './index.php?c=webapp&a=manage&do=list&';
  }
  module() {
    location.href = './index.php?c=module&a=display&';
  }
  welcome() {
    location.href = './index.php?c=home&a=welcome&do=system&';
  }
  upgrade() {
    location.href = './index.php?c=cloud&a=upgrade&';
  }
  help() {
    location.href = './index.php?c=help&a=display&';
  }
  adv() {
    location.href = './index.php?c=advertisement&a=content-provider&';
  }
}
