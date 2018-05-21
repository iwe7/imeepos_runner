import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsBuilderRoutingModule } from './forms-builder-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { PreviewComponent } from './preview/preview.component';
import { FieldsComponent } from './fields/fields.component';
import { NzModalModule } from 'ng-zorro-antd';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, FormsBuilderRoutingModule, SharedModule, NzModalModule],
  declarations: [
    CreateComponent,
    ListComponent,
    ListItemComponent,
    PreviewComponent,
    FieldsComponent,
  ],
  entryComponents: [CreateComponent],
})
export class FormsBuilderModule {}
