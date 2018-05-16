import { Injectable } from '@angular/core';
import { UrlService } from '@core/url.service';
import { HttpClient } from '@angular/common/http';
import { map, filter, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NoticeService {
  loading: boolean = true;
  dot: boolean = false;
  list: any[] = [];
  constructor(public url: UrlService, public http: HttpClient) {}

  loadData() {
    this.loading = true;
    this.http
      .get(this.url.getWebOpen('web/notice/list'))
      .pipe(
        map((res: any) => res.data)
      )
      .subscribe(res => {
        console.log('load notice');
        this.list = res;
        this.loading = false;
      });
  }
}
