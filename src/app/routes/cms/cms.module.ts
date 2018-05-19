import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { ListComponent } from './list/list.component';
import { NoticeComponent } from './notice/notice.component';
import { SharedModule } from '@shared/shared.module';
import { NoticeAddComponent } from './notice-add/notice-add.component';

@NgModule({
  imports: [CommonModule, CmsRoutingModule, SharedModule],
  declarations: [ListComponent, NoticeComponent, NoticeAddComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CmsModule {}
