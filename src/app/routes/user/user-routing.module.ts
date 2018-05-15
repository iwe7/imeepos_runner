import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { SettingComponent } from './setting/setting.component';
const routes: Routes = [
  {
    path: 'center',
    component: CenterComponent,
    data: { title: '个人中心', titleI18n: 'user-center' },
  },
  {
    path: 'setting',
    component: SettingComponent,
    data: { title: '设置', titleI18n: 'user-setting' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
