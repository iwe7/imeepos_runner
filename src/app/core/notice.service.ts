import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  loading: boolean = true;
  dot: boolean = false;
  list: any[] = [];
  constructor() { }
}
