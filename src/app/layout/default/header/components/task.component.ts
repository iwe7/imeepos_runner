import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoticeService } from '@core/notice.service';

@Component({
  selector: 'header-task',
  template: `
  <nz-dropdown nzTrigger="click" nzPlacement="bottomRight" (nzVisibleChange)="change()">
    <div class="item" nz-dropdown>
      <nz-badge [nzDot]="dot">
        <i class="anticon anticon-bell"></i>
      </nz-badge>
    </div>
    <div nz-menu class="wd-lg" style="min-width: 240px;">
      <nz-card nzTitle="消息提醒" [nzLoading]="notice.loading" class="ant-card__body-nopadding">
        <ng-template #extra><i class="anticon anticon-plus"></i></ng-template>
        <div nz-row *ngFor="let item of notice.list" [nzType]="'flex'" [nzJustify]="'center'" [nzAlign]="'middle'" class="py-sm bg-grey-lighter-h point">
          <div nz-col [nzSpan]="4" class="text-center">
            <nz-avatar [nzSrc]="item.avatar"></nz-avatar>
          </div>
          <div nz-col [nzSpan]="20">
            <strong>{{item.title}}</strong>
            <p class="mb0">{{item.desc}}</p>
          </div>
        </div>
        <div *ngIf="notice.list.length === 0" class="empty">暂无内容</div>
        <div nz-row (click)="allTasks()" class="pt-lg pb-lg" style="height: 40px;line-height: 40px;">
          <div nz-col [nzSpan]="24" class="border-top-1 text-center text-grey point">
            查看所有
          </div>
        </div>
      </nz-card>
    </div>
  </nz-dropdown>
  `,
})
export class HeaderTaskComponent implements OnInit {
  constructor(public router: Router, public notice: NoticeService) {}

  ngOnInit() {}

  // 所有代办
  allTasks() {
    this.router.navigateByUrl('/notice/list');
  }

  change() {
    console.log('change');
    this.notice.loadData();
  }
}
