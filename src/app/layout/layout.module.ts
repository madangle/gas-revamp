import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//shared module
import { SharedModule } from '../shared/shared.module';

import { LayoutRoutingModule } from './layout-routing.moduel'; 

/*** COMPONENTS ***/
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainNavigationComponent } from './header/main-navigation/main-navigation.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainNavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
