import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { FansComponent } from './fans/fans.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  imports: [
    CommonModule,
    MemberRoutingModule
  ],
  declarations: [FansComponent, MembersComponent]
})
export class MemberModule { }
