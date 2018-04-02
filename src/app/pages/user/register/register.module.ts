import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RegisterComponent } from './register.component';
import { TimeCutModule } from '../time-cut.module';
import { JsonToFormdata } from '../json-to-formdata.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TimeCutModule
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    JsonToFormdata
  ],
  exports: [
  ]
})

export class RegisterModule {}
