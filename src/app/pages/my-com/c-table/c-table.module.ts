import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CTableComponent } from './c-table.component';
import { CTableService } from './c-table.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CTableComponent
  ],
  providers: [
    CTableService
  ],
  exports: [
    CTableComponent
  ]
})

export class CTableModule {}
