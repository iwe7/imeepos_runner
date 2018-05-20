import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { CreateComponent } from '../create/create.component';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { map, tap, debounceTime } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

import { Location } from '@angular/common';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any;

  update$: Subject<any> = new Subject();
  constructor(
    public router: Router,
    public modal: NzModalService,
    public url: Iwe7UrlService,
    public http: HttpClient,
    public location: Location,
  ) {}

  ngOnInit() {
    this.refresh();
    this.location.subscribe(item => {
      this.update$.next();
    });
    this.update$.pipe(debounceTime(200)).subscribe(res => {
      this.refresh();
    });
  }

  refresh() {
    this.http
      .get(this.url.getWebOpen('web/forms-builder/list'))
      .pipe(map((res: any) => res.data))
      .subscribe(res => {
        this.list = res;
      });
  }

  createForm() {
    this.router.navigateByUrl('/formsBuilder/create');
  }
}
