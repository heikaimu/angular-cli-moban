import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { myComRoutes } from './my-com.routes';

import { CEchartModule } from './c-echart/c-echart.module';
import { CEditorModule } from './c-editor/c-editor.module';
import { ImgCropModule } from './img-crop/img-crop.module';
import { CTableModule } from './c-table/c-table.module';
import { EditorFormModule } from './editor-form/editor-form.module';

@NgModule({
  imports: [
    CommonModule,
    myComRoutes,
    CEchartModule,
    CEditorModule,
    ImgCropModule,
    CTableModule,
    EditorFormModule
  ],
  declarations: [
  ],
  exports: []
})

export class MyComModule {}
