import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TravelFormContainerComponent } from './components/travel-form-container/travel-form-container.component';

const routes: Routes = [
  {path:':tipo_mezzo', component: TravelFormContainerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TravelFormRoutingModule { }
