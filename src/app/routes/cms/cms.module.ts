import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ListComponent } from './list/list.component';
import { NoticeComponent } from './notice/notice.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule
  ],
  declarations: [ListComponent, NoticeComponent]
})
export class CmsModule { }
