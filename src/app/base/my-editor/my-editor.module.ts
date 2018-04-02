import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MyEditorComponent } from './my-editor.component';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QuillModule
  ],
  declarations: [
    MyEditorComponent
  ],
  exports: [
    MyEditorComponent
  ]
})

export class MyEditorModule {}
