import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ControlWidget } from '@delon/form';
import { NzModalService } from 'ng-zorro-antd';
import { filter, tap } from 'rxjs/operators';
import { CreateFieldComponent } from 'iwe7-forms-builder';
import { defaultsDeep } from 'lodash';
@Component({
  selector: 'sf-tinymce',
  template: `
  <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
    <ul>
      <li *ngFor="let item of items">{{item.title}}-{{item.name}}-{{item.type}}</li>
    </ul>
    <a nz-button nzType="default" nzShape="circle" (click)="addField()">
      <i class="anticon anticon-file-add"></i>
    </a>
  </sf-item-wrap>
  `,
  preserveWhitespaces: false,
})
// tslint:disable-next-line:component-class-suffix
export class FormBuilderWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'formbuilder';

  items: any[] = [];

  constructor(cd: ChangeDetectorRef, public modal: NzModalService) {
    super(cd);
  }
  ngOnInit(): void {
    console.log(this);
  }

  addField() {
    this.modal
      .create({
        nzContent: CreateFieldComponent,
        nzFooter: null,
      })
      .afterClose.pipe(tap(res => console.log(res)), filter(res => !!res))
      .subscribe(res => {
        const val = defaultsDeep(res, this.value);
        this.items.push(val);
        this.cd.markForCheck();
        const val2 = defaultsDeep(this.formProperty.formData, {
          [`${val['name']}`]: val,
        });
        this.formProperty.setValue(val2, false);
        (<any>this).value = val2;
      });
  }
}
