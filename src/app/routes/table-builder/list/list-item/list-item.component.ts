import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Iwe7UrlService } from 'iwe7-url';
import { NzMessageBaseService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() table: any = {};
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public http: HttpClient,
    public url: Iwe7UrlService,
    public msg: NzMessageService,
  ) {}

  ngOnInit() {}

  previewForm() {
    setTimeout(() => {
      this.router.navigate(['/tableBuilder/preview', this.table.id]);
    }, 200);
  }

  editForm() {
    setTimeout(() => {
      this.router.navigate(['/tableBuilder/edit', this.table.id]);
    }, 200);
  }

  delete() {
    this.http
      .post(this.url.getWebOpen('web/table/delete'), {
        id: this.table.id,
      })
      .subscribe((res: any) => {
        this.msg.success(res.msg);
      });
  }
}
