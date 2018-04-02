import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { EditorFormComponent } from './editor-form.component';
import { QuillModule } from 'ngx-quill';
import { MyEditorModule } from '../../../base/my-editor/my-editor.module';
import { MyImgCropModule } from '../../../base/my-img-crop/my-img-crop.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuillModule,
    MyEditorModule,
    MyImgCropModule
  ],
  declarations: [
    EditorFormComponent
  ],
  exports: [
  ]
})

export class EditorFormModule {}
