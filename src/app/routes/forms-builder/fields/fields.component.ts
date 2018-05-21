import { Component, OnInit } from '@angular/core';
import { SimpleTableColumn } from '@delon/abc';
import { ActivatedRoute } from '@angular/router';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CreateFieldComponent } from '../create-field/create-field.component';
import { defaultsDeep } from 'lodash';

@Component({
  selector: 'fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss'],
})
export class FieldsComponent implements OnInit {
  users: Observable<any[]>;
  columns: SimpleTableColumn[] = [
    { title: '名称', index: 'name' },
    { title: '标题', index: 'title' },
    { title: '类型', index: 'type' },
    {
      title: '操作',
      buttons: [
        {
          text: '编辑',
          type: 'modal',
          component: CreateFieldComponent,
          click: (record: any, modal: any) => {
            const data = defaultsDeep(record, modal);
            this.http
              .post(this.url.getWebOpen('web/forms-builder/updateField'), {
                code: this.id,
                data: data,
              })
              .subscribe(res => {
                console.log(res);
              });
          },
        },
        {
          text: '删除',
          type: 'del',
          click: (record: any) => {},
        },
      ],
    },
  ];
  id: string;
  constructor(
    public route: ActivatedRoute,
    public url: Iwe7UrlService,
    public http: HttpClient,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
      this.get();
    });
  }

  ngOnInit() {}

  get() {
    this.users = this.http
      .get(this.url.getWebOpen('web/forms-builder/get', { code: this.id }))
      .pipe(
        map((res: any) => res.data),
        map(res => res.schema),
        map(res => res.properties),
        map(res => {
          const users = [];
          for (const key in res) {
            users.push({
              name: key,
              ...res[key],
            });
          }
          return users;
        }),
        tap(res => console.log(res)),
      );
  }
}
