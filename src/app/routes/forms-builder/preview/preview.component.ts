import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Iwe7UrlService } from 'iwe7-url';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { SFSchema, SFComponent } from '@delon/form';
@Component({
  selector: 'preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit, AfterViewInit {
  settingSchema: SFSchema = {
    type: 'object',
    properties: {
      mode: {
        type: 'string',
        title: '模式',
        default: 'default',
        enum: [
          {
            label: '默认',
            value: 'default',
          },
          {
            label: '搜索',
            value: 'search',
          },
          {
            label: '编辑',
            value: 'edit',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      layout: {
        type: 'string',
        title: '布局',
        default: 'horizontal',
        enum: [
          {
            label: '水平',
            value: 'horizontal',
          },
          {
            label: '垂直',
            value: 'vertical',
          },
          {
            label: '行内',
            value: 'inline',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      autocomplete: {
        type: 'string',
        title: '自动补全',
        default: 'on',
        enum: [
          {
            label: '开启',
            value: 'on',
          },
          {
            label: '关闭',
            value: 'off',
          },
        ],
        ui: {
          widget: 'select',
        },
      },
      firstVisual: {
        type: 'boolean',
        title: '立即显示',
        default: true,
      },
      liveValidate: {
        type: 'boolean',
        title: '实时校验',
        default: true,
      },
      button: {
        type: 'object',
        title: '按钮设置',
        properties: {
          submit: {
            type: 'string',
            title: '提交按钮',
            default: '保存',
          },
          reset: {
            type: 'string',
            title: '重置按钮',
            default: '重置',
          },
        },
      },
    },
  };
  settingButton: any;

  @ViewChild('settingSf', {
    read: SFComponent,
  })
  settingSf: SFComponent;

  @ViewChild('sf', {
    read: SFComponent,
  })
  sf: SFComponent;

  id: any;
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

  ngAfterViewInit() {
    this.settingSf.formChange.subscribe(res => {
      this.http
        .post(this.url.getWebOpen('web/forms-builder/update'), {
          code: this.id,
          ...res,
        })
        .subscribe(json => {
          if ('mode' in res) {
            this.mode = res['mode'];
          }
          if ('autocomplete' in res) {
            this.autocomplete = res['autocomplete'];
          }
          if ('firstVisual' in res) {
            this.firstVisual = res['firstVisual'];
          }
          if ('liveValidate' in res) {
            this.liveValidate = res['liveValidate'];
          }
          if ('layout' in res) {
            this.layout = res['layout'];
          }
          if ('button' in res) {
            this.button = res['button'];
          }
        });
    });
  }

  schema: any;
  formData: any;
  button: any;
  ui: any;
  formId: string;
  layout: string;
  autocomplete: string;
  firstVisual: boolean;
  liveValidate: boolean;
  mode: string;
  get() {
    this.http
      .get(this.url.getWebOpen('web/forms-builder/get', { code: this.id }))
      .pipe(map((res: any) => res.data), tap(res => console.log(res)))
      .subscribe(res => {
        this.formData = res.formData;
        this.schema = res.schema;
        this.schema['properties'] = this.schema['properties'] || {};
        this.button = res.button;
        this.ui = res.ui;
        this.formId = 'form' + res.id;
        this.layout = res.layout;
        this.autocomplete = res.autocomplete;
        this.firstVisual = res.firstVisual === 1 ? true : false;
        this.liveValidate = res.liveValidate === 1 ? true : false;
        this.mode = res.mode;
      });
  }

  setSf(e: any): void {
    this.sf = e;
  }
}
