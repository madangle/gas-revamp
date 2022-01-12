import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EServicesComponent } from './e-services.component';

const routes: Routes = [{ path: '', component: EServicesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EServicesRoutingModule { }
