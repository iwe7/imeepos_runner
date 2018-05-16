import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { BugStatusComponent } from './bug-status/bug-status.component';

const routes: Routes = [
  {
    path: 'post',
    component: PostComponent,
  },
  {
    path: 'detail',
    component: BugStatusComponent,
    data: {
      title: 'bug详情',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugRoutingModule {}
