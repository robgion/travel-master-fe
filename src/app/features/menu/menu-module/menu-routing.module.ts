import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuModule } from './menu.module';
import { MenuComponent } from '../component/menu/menu.component';

const routes:Routes = [
  {path:'', component:MenuComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuRoutingModule { }
