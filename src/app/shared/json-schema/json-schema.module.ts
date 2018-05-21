import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DelonFormModule, WidgetRegistry } from '@delon/form';

import { TinymceWidget } from './widgets/tinymce/tinymce.widget';
import { UeditorWidget } from './widgets/ueditor/ueditor.widget';
import { ClockPickerWidget } from './widgets/clockpicker/clockpicker.widget';
import { IconPickerWidget } from './widgets/iconpicker/iconpicker.widget';
import { FormBuilderWidget } from './widgets/form-builder/form-builder.widget';

export const SCHEMA_THIRDS_COMPONENTS = [
  TinymceWidget,
  UeditorWidget,
  ClockPickerWidget,
  IconPickerWidget,
  FormBuilderWidget
];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule, DelonFormModule.forRoot()],
  exports: [...SCHEMA_THIRDS_COMPONENTS],
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    widgetRegistry.register(ClockPickerWidget.KEY, ClockPickerWidget);
    widgetRegistry.register(IconPickerWidget.KEY, IconPickerWidget);
    widgetRegistry.register(FormBuilderWidget.KEY, FormBuilderWidget);
  }
}
