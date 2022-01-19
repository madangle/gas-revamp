import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
