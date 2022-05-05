import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  /*{ path: 'login', redirectTo: '/menu', pathMatch: 'full' },*/
  { path:'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  {path:'menu' , loadChildren: ()=> import('./features/menu/menu-module/menu.module').then(m=>m.MenuModule)},
  { path: 'transports', loadChildren: () => import('./features/transports/transports.module').then(m=>m.TransportsModule)},
  { path: 'booking', loadChildren: () => import('./features/booking/booking-module/booking-module.module').then(m=>m.BookingModuleModule)}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
