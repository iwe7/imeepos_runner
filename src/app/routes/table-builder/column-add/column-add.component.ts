import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';

import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'column-add',
  templateUrl: './column-add.component.html',
  styleUrls: ['./column-add.component.css'],
})
export class ColumnAddComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '标题',
        default: 'ID',
      },
      index: {
        type: 'string',
        title: '关联数据',
        default: 'id',
      },
      type: {
        type: 'string',
        title: '类型',
        default: 'string',
        enum: [
          {
            label: '无',
            value: 'string',
          },
          {
            label: '多选',
            value: 'checkbox',
          },
          {
            label: '单选',
            value: 'radio',
          },
          {
            label: '链接',
            value: 'link',
          },
          {
            label: '图像',
            value: 'img',
          },
          {
            label: '数字',
            value: 'number',
          },
          {
            label: '货币',
            value: 'currency',
          },
          {
            label: '日期',
            value: 'date',
          },
          {
            label: 'boolean',
            value: 'yn',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      exported: {
        type: 'boolean',
        default: true,
        title: '允许导出',
      },
      sort: {
        type: 'string',
        default: 'desc',
        title: '排序',
        enum: [
          {
            label: '倒序',
            value: 'asc',
          },
          {
            label: '正序',
            value: 'desc',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      width: {
        type: 'string',
        title: '宽度',
      },
      default: {
        type: 'string',
        title: '默认值',
      },
    },
  };
  formData: any = {};
  id: string;
  constructor(
    public url: Iwe7UrlService,
    public http: HttpClient,
    public location: Location,
    public route: ActivatedRoute,
  ) {
    this.route.params.subscribe(res => {
      this.id = res.id;
    });
  }

  ngOnInit() {}

  submit(e: any) {
    this.http
      .post(
        this.url.getWebOpen('web/table-builder/column-add', { id: this.id }),
        e,
      )
      .subscribe(res => {
        this.location.back();
      });
  }
}
