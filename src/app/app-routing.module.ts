import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



 const routes: Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', loadChildren: ()=> import('./features/login/login.module').then(m=>m.LoginModule)}
  // componente scelta mezzo/Pacchetti viaggi {path:'', loadChildren: ()=> import(./).then(m=>m.)}

]; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
