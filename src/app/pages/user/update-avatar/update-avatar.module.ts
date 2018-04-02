import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { UpdateAvatarComponent } from './update-avatar.component';
import { MyImgCropModule } from '../../../base/my-img-crop/my-img-crop.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MyImgCropModule
  ],
  declarations: [
    UpdateAvatarComponent
  ],
  providers: [
  ],
  exports: [
  ]
})

export class UpdateAvatarModule {}
