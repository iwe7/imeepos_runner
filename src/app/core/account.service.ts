import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(public url: UrlService, public http: HttpClient) {}

  list() {
    return this.http.get(this.url.getWebOpen('web/account/list'));
  }
}
