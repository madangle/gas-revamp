import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EServicesRoutingModule } from './e-services-routing.module';
import { EServicesComponent } from './e-services.component';


@NgModule({
  declarations: [EServicesComponent],
  imports: [
    CommonModule,
    EServicesRoutingModule
  ]
})
export class EServicesModule { }
