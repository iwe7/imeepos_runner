import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import {
  MenuService,
  SettingsService,
  TitleService,
  ALAIN_I18N_TOKEN,
} from '@delon/theme';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';
import { UrlService } from '../url.service';
import { AccountService } from '@core/account.service';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    private httpClient: HttpClient,
    private injector: Injector,
  ) {}

  load() {
    return new Promise((resolve, reject) => {
      const url = this.injector.get(UrlService);
      zip(
        this.httpClient.get(
          url.getWebOpen(`web/i18n/${this.i18n.defaultLang}`),
        ),
        this.httpClient.get(url.getWebOpen('web/appData')),
      )
        .pipe(
          catchError(([langData, appData]) => {
            resolve(null);
            return [langData, appData];
          }),
        )
        .subscribe(
          ([langData, appData]) => {
            this.translate.setTranslation(this.i18n.defaultLang, langData);
            this.translate.setDefaultLang(this.i18n.defaultLang);
            const res = appData;
            this.settingService.setApp(res.app);
            this.settingService.setUser(res.user);
            this.aclService.setRole(res.user.role);
            if (res.user.role === 'founder') {
              this.aclService.setFull(true);
            }
            const acs = res.accounts;
            const accounts = [];
            for (const key in acs) {
              accounts.push(acs[key]);
            }
            const account = this.injector.get(AccountService);
            account.setAccounts(accounts);
            this.menuService.add(res.menu);
            this.titleService.suffix = res.app.name;
          },
          () => {},
          () => {
            resolve(null);
          },
        );
    });
  }
}
