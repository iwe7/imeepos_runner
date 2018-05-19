import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeAddComponent } from './notice-add/notice-add.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'notice',
    component: NoticeComponent,
  },
  {
    path: 'notice-add',
    component: NoticeAddComponent,
    data: { title: '添加公告' },
  },
  {
    path: 'notice-edit/:id',
    component: NoticeAddComponent,
    data: { title: '添加公告' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
