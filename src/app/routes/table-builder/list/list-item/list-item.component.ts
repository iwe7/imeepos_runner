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
  id: string;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public http: HttpClient,
    public url: Iwe7UrlService,
    public msg: NzMessageService,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
    });
  }

  ngOnInit() {}

  previewForm() {
    this.router.navigate(['/table/preview', this.id]);
  }

  editForm() {
    this.router.navigate(['/table/edit', this.id]);
  }

  delete() {
    this.http
      .post(this.url.getWebOpen('web/table/delete'), {
        id: this.id,
      })
      .subscribe((res: any) => {
        this.msg.success(res.msg);
      });
  }
}
