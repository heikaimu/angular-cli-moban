import { Routes, RouterModule } from '@angular/router';
import { FindPasswordComponent } from './find-password/find-password.component';
import { UpdateAvatarComponent } from './update-avatar/update-avatar.component';

const ROUTES: Routes = [
  {
    path: 'find_password',
    component: FindPasswordComponent,
  },
  {
    path: 'update_avatar',
    component: UpdateAvatarComponent,
  }
];

export const userRoutes = RouterModule.forChild(ROUTES);
