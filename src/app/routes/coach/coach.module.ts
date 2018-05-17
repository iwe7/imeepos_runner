import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachRoutingModule } from './coach-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoachRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent]
})
export class CoachModule { }
