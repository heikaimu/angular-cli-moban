import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MyImgCropComponent } from './my-img-crop.component';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MyImgCropComponent,
    ImageCropperComponent
  ],
  providers: [
    CropperSettings
  ],
  exports: [
    MyImgCropComponent
  ]
})

export class MyImgCropModule {}
