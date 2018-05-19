import { Injectable } from '@angular/core';
import * as ZeroClipboard from 'zeroclipboard';
@Injectable({
  providedIn: 'root',
})
export class ZeroClipboardService {
  constructor() {
    console.log(ZeroClipboard);
  }
}
