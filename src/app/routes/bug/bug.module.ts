import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BugRoutingModule } from './bug-routing.module';
import { PostComponent } from './post/post.component';
import { SharedModule } from '@shared/shared.module';
import { BugStatusComponent } from './bug-status/bug-status.component';

@NgModule({
  imports: [
    CommonModule,
    BugRoutingModule,
    SharedModule
  ],
  declarations: [PostComponent, BugStatusComponent]
})
export class BugModule { }
