import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'e-services',
        loadChildren: () => import('./features/e-services/e-services.module').then(m => m.EServicesModule) 
      },
      {
        path: 'contact',
        loadChildren: () => import('./features/media/media.module').then(m => m.MediaModule)
      }
    ]
  }
];

// const routes: Routes = [
//   { 
//     path: 'home', 
//     component: MainLayoutComponent,
//     loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) 
//   },
//   { 
//     path: 'e-services', 
//     component: MainLayoutComponent,
//     loadChildren: () => import('./features/e-services/e-services.module').then(m => m.EServicesModule) 
//   },
//   { 
//     path: 'media', 
//     component: MainLayoutComponent,
//     loadChildren: () => import('./features/media/media.module').then(m => m.MediaModule) 
//   },
//   {
//     path: '',
//     component: MainLayoutComponent,
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
