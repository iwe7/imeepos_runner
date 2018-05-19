import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsBuilderRoutingModule } from './forms-builder-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsBuilderRoutingModule,
    SharedModule
  ],
  declarations: [CreateComponent, ListComponent]
})
export class FormsBuilderModule { }
