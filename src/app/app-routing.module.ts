import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
  { path: 'transports', loadChildren: () => import('./features/transports/transports.module').then(m=>m.TransportsModule)}
  // componente scelta mezzo/Pacchetti viaggi {path:'rottamenu', loadChildren: ()=> import(./rottamenumodulo).then(m=>m.modulomenu)}

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
