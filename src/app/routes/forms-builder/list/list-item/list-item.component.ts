import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Iwe7UrlService } from 'iwe7-url';
import { Location } from '@angular/common';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
})
export class ListItemComponent implements OnInit {
  @Input() form: any;
  @Input() schema: any;
  @Input() code: string;

  @Input() schemas: any[] = [];

  @Output() refresh: EventEmitter<any> = new EventEmitter();
  constructor(
    public router: Router,
    public http: HttpClient,
    public url: Iwe7UrlService,
    public location: Location
  ) {}

  ngOnInit() {}

  settingForm() {}

  editForm() {
    this.router.navigate(['/formsBuilder/edit/', this.code]);
  }

  delete() {
    this.http
      .post(this.url.getWebOpen('web/forms-builder/del'), {
        code: this.code,
      })
      .subscribe(res => {
        this.refresh.emit(res);
      });
  }

  previewForm() {
    setTimeout(() => {
      this.router.navigate(['/formsBuilder/preview/', this.code]);
    }, 200);
  }

  fieldsForm() {
    setTimeout(() => {
      this.router.navigate(['/formsBuilder/fields/', this.code]);
    }, 200);
  }

  validsForm() {
    setTimeout(() => {
      this.router.navigate(['/formsBuilder/valids/', this.code]);
    }, 200);
  }
}
