import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelOptionsContainerComponent } from './components/travel-options-container/travel-options-container.component';
import { TravelOptionsListItemComponent } from './components/travel-options-list-item/travel-options-list-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TravelOptionsRoutingModule } from './travel-options-routing.module';



@NgModule({
  declarations: [TravelOptionsContainerComponent, TravelOptionsListItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    TravelOptionsRoutingModule
  ],
  exports: [
    TravelOptionsContainerComponent
  ]
})
export class TravelOptionsModule { }
