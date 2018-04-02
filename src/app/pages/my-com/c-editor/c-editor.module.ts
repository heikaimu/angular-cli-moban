import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CEditorComponent } from './c-editor.component';
import { QuillModule } from 'ngx-quill';
import { MyEditorModule } from '../../../base/my-editor/my-editor.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuillModule,
    MyEditorModule
  ],
  declarations: [
    CEditorComponent
  ],
  exports: [
  ]
})

export class CEditorModule {}
