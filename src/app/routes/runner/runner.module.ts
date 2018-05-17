import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerRoutingModule } from './runner-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { RunnersComponent } from './runners/runners.component';
import { SettingComponent } from './setting/setting.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RunnerRoutingModule,
    SharedModule
  ],
  declarations: [TasksComponent, RunnersComponent, SettingComponent]
})
export class RunnerModule { }
