import { Injectable } from '@angular/core';
import { UrlService } from '@core/url.service';
import { Iwe7ScriptService } from 'iwe7-script';
@Injectable({
  providedIn: 'root',
})
export class SwiperService {
  constructor(public url: UrlService, public script: Iwe7ScriptService) {}

  load() {
    return this.script.load([
      `${this.url.root}web/resource/components/swiper/swiper.min.js`,
      `${this.url.root}web/resource/components/swiper/swiper.min.css`,
    ]);
  }
}
