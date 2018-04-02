import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutes } from './user.routes';

import { FindPasswordModule } from './find-password/find-password.module';
import { UpdateAvatarModule } from './update-avatar/update-avatar.module';

@NgModule({
  imports: [
    CommonModule,
    userRoutes,
    FindPasswordModule,
    UpdateAvatarModule
  ],
  declarations: [
  ],
  exports: []
})

export class UserModule {}
