import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { CreateFieldComponent } from './create-field/create-field.component';
import { PreviewComponent } from './preview/preview.component';
import { FieldsComponent } from './fields/fields.component';
import { ValidsComponent } from './valids/valids.component';
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      title: '表单管理',
    },
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: '表单管理',
    },
  },
  {
    path: 'create',
    component: CreateComponent,
    data: { title: '创建表单' },
  },
  {
    path: 'edit/:id',
    component: CreateComponent,
    data: { title: '编辑表单' },
  },
  {
    path: 'preview/:id',
    component: PreviewComponent,
    data: { title: '预览表单' },
  },
  {
    path: 'fields/:id',
    component: FieldsComponent,
    data: { title: '表单类型' },
  },
  {
    path: 'valids/:id',
    component: ValidsComponent,
    data: { title: '验证规则' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsBuilderRoutingModule {}
