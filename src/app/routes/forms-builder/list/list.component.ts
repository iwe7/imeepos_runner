import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { CreateComponent } from '../create/create.component';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  list: any;
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
      this.refresh();
    });
  }

  refresh() {
    this.http
      .get(this.url.getWebOpen('web/forms-builder/list'))
      .pipe(map((res: any) => res.data), tap(res => console.log(res)))
      .subscribe(res => {
        this.list = res;
      });
  }

  createForm() {
    this.router.navigateByUrl('/formsBuilder/create');
  }
}
