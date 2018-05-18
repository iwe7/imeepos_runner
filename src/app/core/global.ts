import {
  ACCOUNT_TYPE_WEBAPP_NORMAL,
  ACCOUNT_TYPE_PHONEAPP_NORMAL,
} from './const';
import { Injector } from '@angular/core';

export function wurl(segment: string, params: any = {}) {
  const [_controller, _action, _do] = segment.split('/');
  let url = './index.php?';
  if (!!_controller) {
    url += `c=${_controller}&`;
  }
  if (!!_action) {
    url += `a=${_action}&`;
  }
  if (!!_do) {
    url += `do=${_do}&`;
  }
  if (!!params) {
    const queryString = getUrl(params);
    url += queryString;
  }
  return url;
}

export function murl(
  segment: string,
  params: any = {},
  noredirect = true,
  addhost = false,
) {
  const [_controller, _action, _do] = segment.split('/');
  let url = '';
  if (!!addhost) {
    url = this.env.root + 'app/';
  } else {
    url = './';
  }
  let str = '';
  if (
    !!this.env.account &&
    this.env.account.type === ACCOUNT_TYPE_WEBAPP_NORMAL
  ) {
    str += '&a=webapp';
  }
  if (
    !!this.env.account &&
    this.env.account.type === ACCOUNT_TYPE_PHONEAPP_NORMAL
  ) {
    str += '&a=phoneapp';
  }
  url += `index.php?i=${this.env.uniacid}${str}&`;
  if (!!_controller) {
    url += `c=${_controller}&`;
  }
  if (!!_action) {
    url += `a=${_action}&`;
  }
  if (!!_do) {
    url += `do=${_do}&`;
  }
  if (!!params) {
    const queryString = getUrl(params);
    url += queryString;
    if (noredirect === false) {
      url += '&wxref=mp.weixin.qq.com#wechat_redirect';
    }
  }
  return url;
}

export function serializeQueryParams(params: { [key: string]: any }): string {
  const strParams: string[] = Object.keys(params).map(name => {
    const value = params[name];
    return Array.isArray(value)
      ? value.map(v => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join('&')
      : `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
  });
  return strParams.length ? `?${strParams.join('&')}` : '';
}

export function encodeUriQuery(s: string): string {
  return encodeUriString(s).replace(/%3B/gi, ';');
}

export function encodeUriString(s: string): string {
  return encodeURIComponent(s)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}

export function getUrl(_params: any = {}) {
  return serializeQueryParams(_params);
}
