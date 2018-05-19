import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { CreateFieldComponent } from './create-field/create-field.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormsBuilderRoutingModule {}
