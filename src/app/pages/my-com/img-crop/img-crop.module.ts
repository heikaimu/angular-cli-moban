import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgCropComponent } from './img-crop.component';
import { MyImgCropModule } from '../../../base/my-img-crop/my-img-crop.module';

@NgModule({
  imports: [
    CommonModule,
    MyImgCropModule
  ],
  declarations: [
    ImgCropComponent
  ],
  exports: [
    ImgCropComponent
  ]
})

export class ImgCropModule {}
