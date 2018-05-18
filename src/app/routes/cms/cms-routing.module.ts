import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { NoticeComponent } from './notice/notice.component';
const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'notice',
    component: NoticeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CmsRoutingModule {}
