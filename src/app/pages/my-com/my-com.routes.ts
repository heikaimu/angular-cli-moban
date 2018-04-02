import { Routes, RouterModule } from '@angular/router';
import { CEchartComponent } from './c-echart/c-echart.component';
import { CEditorComponent } from './c-editor/c-editor.component';
import { CTableComponent } from './c-table/c-table.component';
import { ImgCropComponent } from './img-crop/img-crop.component';
import { EditorFormComponent } from './editor-form/editor-form.component';

const ROUTES: Routes = [
  {
    path: 'echart',
    component: CEchartComponent,
  },
  {
    path: 'editor',
    component: CEditorComponent,
  },
  {
    path: 'editor_form',
    component: EditorFormComponent,
  },
  {
    path: 'table',
    component: CTableComponent,
  },
  {
    path: 'img_crop',
    component: ImgCropComponent,
  }
];

export const myComRoutes = RouterModule.forChild(ROUTES);
