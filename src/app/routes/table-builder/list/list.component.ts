import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any[] = [];

  pi: number = 1;
  ps: number = 10;
  total: number = 0;

  constructor(
    public router: Router,
    public url: Iwe7UrlService,
    public http: HttpClient,
  ) {}

  nzPageIndexChange(nzPageIndex: number) {
    this.pi = nzPageIndex;
    this.getList();
  }

  ngOnInit() {
    this.getList();
  }

  update() {
    this.getList();
  }

  getList() {
    this.http
      .get(
        this.url.getWebOpen('web/table-builder/list', {
          pi: this.pi,
          ps: this.ps,
        }),
      )
      .pipe(map((res: any) => res.data))
      .subscribe(res => {
        this.list = res.list;
        this.total = res.total;
      });
  }

  createTable() {
    this.router.navigate(['/tableBuilder/create']);
  }
}
