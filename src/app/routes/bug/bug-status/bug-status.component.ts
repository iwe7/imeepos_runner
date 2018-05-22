import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { Iwe7UrlService } from 'iwe7-url';
import { map } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'bug-status',
  templateUrl: './bug-status.component.html',
  styleUrls: ['./bug-status.component.css'],
})
export class BugStatusComponent implements OnInit {
  id: string;
  detail: any = {};
  constructor(
    public route: ActivatedRoute,
    public location: Location,
    public http: HttpClient,
    public url: Iwe7UrlService,
    public msg: NzMessageService,
    public router: Router
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.getDetail();
    });
  }

  getDetail() {
    this.http
      .get(this.url.getOpenUrl('web/bug/get'), {
        params: { id: this.id },
      })
      .pipe(map((res: any) => res.data))
      .subscribe(res => {
        this.detail = res;
      });
  }

  ngOnInit() {}

  back() {
    this.location.back();
  }

  close() {
    this.http
      .post(this.url.getWebOpen('web/bug/update'), {
        id: this.id,
        status: -1,
      })
      .subscribe(res => {
        this.back();
      });
  }

  cui() {
    this.http
      .post(this.url.getWebOpen('web/bug/cui'), {
        id: this.id,
      })
      .subscribe((res: any) => {
        this.msg.success(res.msg);
      });
  }
}
