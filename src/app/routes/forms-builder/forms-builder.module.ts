import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsBuilderRoutingModule } from './forms-builder-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';
import { CreateFieldComponent } from './create-field/create-field.component';
import { CreateFieldBaseComponent } from './create-field/create-field-base/create-field-base.component';
import { CreateFieldSchemaComponent } from './create-field/create-field-schema/create-field-schema.component';
import { CreateFieldUiComponent } from './create-field/create-field-ui/create-field-ui.component';
import { CreateFieldWidgetComponent } from './create-field/create-field-widget/create-field-widget';
import { ListItemComponent } from './list/list-item/list-item.component';
import { PreviewComponent } from './preview/preview.component';
import { FieldsComponent } from './fields/fields.component';
import { ValidsComponent } from './valids/valids.component';

@NgModule({
  imports: [CommonModule, FormsBuilderRoutingModule, SharedModule],
  declarations: [
    CreateComponent,
    ListComponent,
    CreateFieldComponent,
    CreateFieldBaseComponent,
    CreateFieldSchemaComponent,
    CreateFieldUiComponent,
    CreateFieldWidgetComponent,
    ListItemComponent,
    PreviewComponent,
    FieldsComponent,
    ValidsComponent,
  ],
  entryComponents: [CreateFieldComponent, CreateComponent],
})
export class FormsBuilderModule {}
