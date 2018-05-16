import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { UrlService } from '@core/url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  roles: any[] = [
    {
      title: '店员',
      code: 'clerk',
    },
    {
      title: '操作员',
      code: 'operator',
    },
    {
      title: '管理员',
      code: 'manager',
    },
    {
      title: '所有者',
      code: 'owner',
    },
    {
      title: '创始人',
      code: 'founder',
    },
    {
      title: '副创始人',
      code: 'vice_founder',
    },
    {
      title: '普通用户',
      code: 'unbind_user',
    },
  ];
  promises: any[] = [
    {
      title: 'bug反馈',
      link: '/bug/post',
    },
    {
      title: 'bug进度',
      link: '/bug/log',
    },
  ];
  constructor(public url: UrlService, public http: HttpClient) {}

  savePromise(data: any) {
    return this.http.post(this.url.getWebOpen('web/account/promise/save'), data);
  }
}
