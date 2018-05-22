import { Component } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem, NoticeIconList } from '@delon/abc';
import { NotifyService } from '@core/notify.service';
import { Router } from '@angular/router';

/**
 * 菜单通知
 */
@Component({
  selector: 'header-notify',
  template: `
  <notice-icon
    [data]="notify.data"
    [count]="notify.count"
    [loading]="notify.loading"
    (select)="select($event)"
    (clear)="clear($event)"
    (popoverVisibleChange)="notify.loadData()"></notice-icon>
  `,
})
export class HeaderNotifyComponent {
  constructor(
    private msg: NzMessageService,
    public notify: NotifyService,
    public router: Router,
  ) {}
  clear(type: string) {
    this.msg.success(`清空了 ${type}`);
  }
  select(res: any) {
    setTimeout(() => {
      if (res.item.type === 'Bug') {
        this.router.navigate(['/bug/detail', res.item.id]);
      }
    }, 200);
  }
}
