import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'com',
        loadChildren: '../my-com/my-com.module#MyComModule'
      },
      {
        path: 'user',
        loadChildren: '../user/user.module#UserModule'
      },
      {
        path: 'map',
        loadChildren: '../map/map.module#MapModule'
      }
    ]
  }
];

export const homeRoutes = RouterModule.forChild(ROUTES);
