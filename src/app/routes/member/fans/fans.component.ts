import { Component, OnInit } from '@angular/core';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { SimpleTableComponent } from '@delon/abc';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css'],
})
export class FansComponent implements OnInit {
  code: string = 'table-fans';
  table: any;
  params: any = {};
  open: string;
  constructor(public url: Iwe7UrlService, public http: HttpClient) {}

  ngOnInit() {
    this.getDetail();
  }

  export() {
    this.http
      .get(
        this.url.getWebOpen(this.open, {
          export: true,
          ...this.params,
        }),
      )
      .pipe(map((res: any) => res.data), map(res => res.list))
      .subscribe(res => {
        this.st.export(res, {
          filename: 'fans.xlsx',
          callback: wp => {
            console.log(wp);
          },
        });
      });
  }

  search(e: any) {
    this.params = e;
    this.st.load(1, e);
  }

  getDetail() {
    this.http
      .get(this.url.getWebOpen('web/table-builder/get', { code: this.code }))
      .pipe(map((res: any) => res.data))
      .subscribe(res => {
        this.table = res;
        this.table['columns'] = this.table['columns'] || [];
        this.open = this.table['data'];
        this.table['data'] = this.url.getWebOpen(this.table['data']);
        this.table['search'] = this.table['search']
          ? this.table['search']
          : {
              type: 'object',
              properties: {
                fanid: {
                  type: 'number',
                  title: '粉丝ID',
                },
                uid: {
                  type: 'number',
                  title: '会员ID',
                },
                nickname: {
                  type: 'string',
                  title: '昵称',
                },
              },
            };
      });
  }

  st: SimpleTableComponent;
  setSimpleTable(e: any) {
    this.st = e;
  }
}
