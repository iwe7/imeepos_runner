import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SFSchema, SFComponent } from '@delon/form';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: 'bug标题',
        ui: {
          placeholder: '请输入标题',
        },
      },
      realname: {
        type: 'string',
        title: '姓名',
        ui: {
          placeholder: '请输入您的姓名',
        },
      },
      desc: {
        type: 'string',
        title: 'bug详情',
        description: '请尽可能详细描述您的问题',
        ui: {
          widget: 'textarea',
          placeholder: '请输入bug详情',
        },
      },
    },
  };
  constructor(
    private router: Router,
    public url: Iwe7UrlService,
    public http: HttpClient,
  ) {}

  ngOnInit() {}

  post(e: any) {
    this.http
      .post(this.url.getWebOpen('web/bug/create'), e)
      .pipe(map((res: any) => res.data))
      .subscribe((res: any) => {
        this.router.navigate(['/bug/detail/', res.id]);
      });
  }
}
