import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mapRoutes } from './map.routes';

import { MapBasicModule } from './map-basic/map-basic.module';

@NgModule({
  imports: [
    CommonModule,
    mapRoutes,
    MapBasicModule
  ],
  declarations: [
  ],
  exports: []
})

export class MapModule {}
