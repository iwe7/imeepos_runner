import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeRoutingModule } from './notice-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    NoticeRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent]
})
export class NoticeModule { }
