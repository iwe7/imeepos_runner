import { Component, OnInit } from '@angular/core';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleTableComponent } from '@delon/abc';
import { map } from 'rxjs/operators';

@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  table: any;
  id: string;
  params: any = {};
  constructor(
    public url: Iwe7UrlService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.getDetail();
    });
  }

  ngOnInit() {}

  search(e: any) {
    this.params = e;
    this.st.load(1, e);
  }

  getDetail() {
    this.http
      .get(this.url.getWebOpen('web/table-builder/get', { id: this.id }))
      .pipe(map((res: any) => res.data))
      .subscribe(res => {
        this.table = res;
        this.table['columns'] = this.table['columns'] || [];
        this.table['data'] = this.url.getWebOpen(this.table['data']);
        this.table['search'] = this.table['search']
          ? this.table['search']
          : {
              type: 'object',
              properties: {
                id: {
                  type: 'number',
                  title: 'ID',
                },
              },
            };
      });
  }

  st: SimpleTableComponent;
  setSimpleTable(e: any) {
    this.st = e;
  }

  createTable() {
    this.router.navigate(['/tableBuilder/create']);
  }

  createTableColumn() {
    this.router.navigate(['/tableBuilder/column-add', this.id]);
  }

  createTableSearch() {
    this.router.navigate(['/tableBuilder/search-add', this.id]);
  }
}
