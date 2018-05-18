import { Injectable } from '@angular/core';
import { UrlService } from '@core/url.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RunnerService {
  constructor(public url: UrlService, public http: HttpClient) {}

  getTasks(param: any) {
    return this.http
      .get(this.url.getOpenUrl('runner/list'), { params: param })
      .pipe(map((res: any) => res.data));
  }

  getRunners(params: any) {
    return this.http
      .get(this.url.getOpenUrl('runner/runners'), { params: params })
      .pipe(map((res: any) => res.data));
  }
}
