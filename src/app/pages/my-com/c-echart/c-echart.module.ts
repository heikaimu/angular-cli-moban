import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CEchartComponent } from './c-echart.component';
import { EChartOptionDirective } from './echart-option.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CEchartComponent,
    EChartOptionDirective
  ],
  exports: [
    CEchartComponent
  ]
})

export class CEchartModule {}
