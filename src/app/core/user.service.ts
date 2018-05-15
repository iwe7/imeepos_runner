import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public url: UrlService, public http: HttpClient) {
    console.log(this.url);
  }

  login(data: any) {
    return this.http.post(this.url.getWebOpen('web/user/login/login'), data, {
      params: {
        _allow_anonymous: 'true',
      },
    });
  }

  register() {}

  forget() {}

  sms() {}
}
