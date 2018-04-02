import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { TimeCutModule } from '../time-cut.module';

import { FindPasswordComponent } from './find-password.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimeCutModule
  ],
  declarations: [
    FindPasswordComponent
  ],
  exports: [
  ]
})

export class FindPasswordModule {}
