import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FansComponent } from './fans/fans.component';
import { MembersComponent } from './members/members.component';
const routes: Routes = [
  {
    path: 'fans',
    component: FansComponent,
  },
  {
    path: 'members',
    component: MembersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRoutingModule {}
