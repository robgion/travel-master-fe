import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TravelOptionsContainerComponent } from './components/travel-options-container/travel-options-container.component';

const routes: Routes = [
  { path: ':tipoMezzo/:dataInizio/:dataFine/:luogoPartenza/:luogoArrivo', component: TravelOptionsContainerComponent}
  //{ path: '', component: TravelOptionsContainerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TravelOptionsRoutingModule { }
