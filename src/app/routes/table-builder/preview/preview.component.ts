import { Component, OnInit } from '@angular/core';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SimpleTableComponent } from '@delon/abc';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  table: any = {};
  id: string;
  constructor(
    public url: Iwe7UrlService,
    public http: HttpClient,
    public route: ActivatedRoute,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.getDetail();
    });
  }

  ngOnInit() {}

  getDetail() {
    this.http.get(this.url.getWebOpen('web/table/get'), {
      params: {
        id: this.id,
      },
    });
  }

  st: SimpleTableComponent;
  setSimpleTable(e: any) {
    this.st = e;
    console.log(this.st);
  }
}
