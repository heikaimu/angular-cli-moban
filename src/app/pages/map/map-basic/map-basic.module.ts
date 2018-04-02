import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { MapBasicComponent } from './map-basic.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    MapBasicComponent
  ],
  exports: [
    MapBasicComponent
  ]
})

export class MapBasicModule {}
