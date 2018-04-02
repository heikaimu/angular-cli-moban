import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeCutDirective } from './time-cut.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    TimeCutDirective
  ],
  exports: [
    TimeCutDirective
  ]
})

export class TimeCutModule {}
