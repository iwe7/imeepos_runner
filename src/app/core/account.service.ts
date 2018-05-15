import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountService {
  accounts: any[] = [];

  account$: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(
    public url: UrlService,
    public http: HttpClient,
    public router: Router,
  ) {
    const account: any = JSON.parse(localStorage.getItem('__account'));
    this.account$.next(account);
  }

  switchAccount(item: any) {
    this.url.setEnvUniacid(item.uniacid);
    this.setAccount(item);
  }

  setAccounts(accounts: any[]) {
    this.accounts = accounts;
  }

  setAccount(item: any) {
    localStorage.setItem('__account', JSON.stringify(item));
    this.account$.next(item);
  }

  list(params: any = {}) {
    return this.http.get(this.url.getWebOpen('web/account/list'), {
      params: {
        account_type: 1,
        ...params,
      },
    });
  }
}
