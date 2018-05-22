import { Component, OnInit } from '@angular/core';
import { SFSchema } from '@delon/form';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      title: {
        type: 'string',
        title: '标题',
        default: '表格.' + new Date().getTime(),
      },
      desc: {
        type: 'string',
        title: '备注',
        default: '表格.' + new Date().getTime(),
      },
      code: {
        type: 'string',
        title: '唯一编码',
        default: 'table-' + new Date().getTime(),
      },
      data: {
        type: 'string',
        title: '数据源',
        default: 'web/table-builder/list',
      },
      resReName: {
        type: 'object',
        properties: {
          total: {
            type: 'string',
            title: '总数',
            default: 'data.total',
          },
          list: {
            type: 'string',
            title: '数据',
            default: 'data.list',
          },
        },
      },
      ps: {
        type: 'number',
        title: '每页数量',
        default: 10,
      },
      showQuickJumper: {
        type: 'boolean',
        title: '快速跳转',
        default: true,
      },
      showTotal: {
        type: 'boolean',
        title: '总数据量',
        default: true,
      },
    },
  };
  formData: any = {};
  constructor(
    public url: Iwe7UrlService,
    public http: HttpClient,
    public location: Location,
  ) {}

  ngOnInit() {}

  submit(e: any) {
    this.http
      .post(this.url.getWebOpen('web/table-builder/save'), e)
      .subscribe(res => {
        this.location.back();
      });
  }
}
