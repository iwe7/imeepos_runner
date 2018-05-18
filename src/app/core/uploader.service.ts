import { Injectable } from '@angular/core';
import { UrlService } from '@core/url.service';

@Injectable({
  providedIn: 'root'
})
export class UploaderService {

  constructor(
    public url: UrlService
  ) { }
}
