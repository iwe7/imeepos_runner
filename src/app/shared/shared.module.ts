import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { EduiBoxComponent } from './neditor/edui-box/edui-box.component';
import { EduiBoxContentDirective } from './neditor/edui-box-content/edui-box-content.component';
import { EduiBoxBodyDirective } from './neditor/edui-box-body/edui-box-body.component';
import { EduiBoxIconComponent } from './neditor/edui-box-icon/edui-box-icon.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { ClockPickerModule } from 'iwe7-clock-picker';
import { ColorPickerModule } from 'iwe7-color-picker';
import { VideoJsModule } from 'iwe7-video-js';
import { AudioJsModule } from 'iwe7-audio-js';
import { AntdIconPickerModule } from 'antd-icon-picker';
import { LinkPickerComponent } from './link-picker/link-picker.component';

import { FormsBuilder } from 'iwe7-forms-builder';

const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule,
  UEditorModule,
  NgxTinymceModule,
  ClockPickerModule,
  ColorPickerModule,
  VideoJsModule,
  AudioJsModule,
  AntdIconPickerModule,
  FormsBuilder
];
// endregion

// region: your componets & directives
const COMPONENTS = [
  EditNoticeComponent,
  NeditorComponent,
  EduiBoxComponent,
  EduiBoxIconComponent,
  LinkPickerComponent
];

import { GetSfDirective } from './get-sf';
const DIRECTIVES = [
  GetElementRefDirective,
  EduiBoxContentDirective,
  EduiBoxBodyDirective,
  GetSfDirective
];
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
    AngularSvgIconModule,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
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
    AngularSvgIconModule,
    // i18n
    TranslateModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  entryComponents: [EditNoticeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
