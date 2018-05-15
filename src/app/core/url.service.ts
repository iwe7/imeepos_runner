import { Injectable, Inject, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export const ENV = new InjectionToken('ENV', {
  providedIn: 'root',
  factory: () => {
    return {
      root: 'https://meepo.com.cn/',
      i: '41',
      m: 'runner_open',
    };
  },
});

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(public http: HttpClient, @Inject(ENV) private env: any) {}

  setEnvRoot(root: string) {
    this.env.root = root;
    return this;
  }

  setEnvUniacid(i: string) {
    this.env.i = i;
    return this;
  }

  serializeQueryParams(params: { [key: string]: any }): string {
    const strParams: string[] = Object.keys(params).map(name => {
      const value = params[name];
      return Array.isArray(value)
        ? value
            .map(v => `${this.encodeUriQuery(name)}=${this.encodeUriQuery(v)}`)
            .join('&')
        : `${this.encodeUriQuery(name)}=${this.encodeUriQuery(value)}`;
    });
    return strParams.length ? `?${strParams.join('&')}` : '';
  }

  encodeUriQuery(s: string): string {
    return this.encodeUriString(s).replace(/%3B/gi, ';');
  }

  encodeUriString(s: string): string {
    return encodeURIComponent(s)
      .replace(/%40/g, '@')
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',');
  }

  getUrl(_params: any = {}) {
    return this.serializeQueryParams(_params);
  }

  getMobileUrl(_do: string, _params: any = {}) {
    _params['do'] = _do;
    _params['i'] = this.env.i;
    _params['m'] = this.env.m;
    _params['c'] = 'entry';
    _params['a'] = 'site';
    return `${this.env.root}app/index.php${this.getUrl(_params)}`;
  }

  getWebUrl(_do: string, _params: any = {}) {
    _params['do'] = _do;
    _params['i'] = this.env.i;
    _params['m'] = this.env.m;
    _params['c'] = 'site';
    _params['a'] = 'entry';
    return `${this.env.root}web/index.php${this.getUrl(_params)}`;
  }

  getOpenUrl(_open: string, _params: any = {}) {
    const url = this.getMobileUrl('open', {
      ..._params,
      ...{ open: _open },
    });
    return url;
  }

  getWebOpen(_open: string, _params: any = {}) {
    return this.getWebUrl('open', {
      ..._params,
      ...{ open: _open },
    });
  }
}
