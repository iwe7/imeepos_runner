import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { SettingComponent } from './setting/setting.component';
import { SharedModule } from '@shared/shared.module';
import { RoleSettingComponent } from './setting/role-setting/role-setting.component';

@NgModule({
  imports: [CommonModule, RoleRoutingModule, SharedModule],
  declarations: [SettingComponent, RoleSettingComponent],
})
export class RoleModule {}
