import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
// i18n
import { TranslateModule } from '@ngx-translate/core';

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { UEditorModule } from 'iwe7-editor';
import { NgxTinymceModule } from 'ngx-tinymce';
import { GetElementRefDirective } from '@shared/get-element-ref';
import { EditNoticeComponent } from './modal/edit-notice/edit-notice.component';
import { NeditorComponent } from './neditor/neditor.component';
import { UiEditorComponent } from './neditor/ui-editor/ui-editor.component';
import { EduiBoxComponent } from './neditor/edui-box/edui-box.component';

const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule,
  UEditorModule,
  NgxTinymceModule,
];
// endregion

// region: your componets & directives
const COMPONENTS = [EditNoticeComponent, NeditorComponent, UiEditorComponent];
const DIRECTIVES = [GetElementRefDirective];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    EduiBoxComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // i18n
    TranslateModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: [EditNoticeComponent],
})
export class SharedModule {}
