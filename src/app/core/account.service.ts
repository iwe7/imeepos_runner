import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';

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

  setAccounts(res: any[]) {
    const ress = [];
    for (const key in res) {
      if (res[key].level === '4') {
        res[key].description = '认证服务号';
      } else if (res[key].level === '3') {
        res[key].description = '认证订阅号';
      } else if (res[key].level === '2') {
        res[key].description = '普通服务号';
      } else if (res[key].level === '1') {
        res[key].description = '普通订阅号';
      } else {
        res[key].description = '未知类型';
      }
      ress.push(res[key]);
    }
    this.accounts = ress || [];
  }

  setAccount(item: any) {
    localStorage.setItem('__account', JSON.stringify(item));
    this.account$.next(item);
  }

  list(params: any = {}) {
    return of(this.accounts);
  }
}
