import { Injectable } from '@angular/core';
import { UrlService } from '@core/url.service';
import { HttpClient } from '@angular/common/http';
import { NoticeItem, NoticeIconList } from '@delon/abc';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { map, debounceTime, filter, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  data: NoticeItem[] = [
    {
      title: '通知',
      list: [],
      emptyText: '你已查看所有通知',
      emptyImage:
        'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: '清空通知',
    },
    {
      title: '消息',
      list: [],
      emptyText: '您已读完所有消息',
      emptyImage:
        'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: '清空消息',
    },
    {
      title: '更新',
      list: [],
      emptyText: '你已完成所有更新',
      emptyImage:
        'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
      clearText: '清空更新',
    },
  ];

  count = 0;
  loading: boolean = true;
  constructor(public url: UrlService, public http: HttpClient) {}

  loadData() {
    this.http
      .post(
        'https://meepo.com.cn/app/index.php?i=41&c=entry&do=open&open=web/notify/get&m=runner_open',
        {
          site: location.hostname,
        },
      )
      .pipe(
        debounceTime(400),
        tap(res => {
          this.loading = true;
        }),
        map((res: any) => res.data),
      )
      .subscribe(res => {
        this.loading = false;
        this.data = this.updateNoticeData(res);
      });
  }

  updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach(i => (i.list = []));
    notices.forEach(item => {
      const newItem = { ...item };
      if (newItem.datetime)
        newItem.datetime = distanceInWordsToNow(item.datetime, {
          locale: (window as any).__locale__,
        });
      if (newItem.extra && newItem.status) {
        newItem.color = {
          todo: undefined,
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newItem.status];
      }
      data.find(w => w.title === newItem.type).list.push(newItem);
    });
    return data;
  }
}
