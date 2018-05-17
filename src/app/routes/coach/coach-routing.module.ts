import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { TeachersComponent } from './teachers/teachers.component';
import { LogComponent } from './log/log.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'teachers',
    component: TeachersComponent,
  },
  {
    path: 'log',
    component: LogComponent,
  },
  {
    path: 'setting',
    component: SettingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachRoutingModule {}
