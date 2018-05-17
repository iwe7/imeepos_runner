import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';
import { TeachersComponent } from './teachers/teachers.component';
import { LogComponent } from './log/log.component';
import { SettingComponent } from './setting/setting.component';

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, TeachersComponent, LogComponent, SettingComponent]
})
export class CoachModule { }
