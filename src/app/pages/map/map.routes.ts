import { Routes, RouterModule } from '@angular/router';
import { MapBasicComponent } from './map-basic/map-basic.component';

const ROUTES: Routes = [
  {
    path: 'basic',
    component: MapBasicComponent,
  }
];

export const mapRoutes = RouterModule.forChild(ROUTES);
