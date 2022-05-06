import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelOptionsContainerComponent } from './components/travel-options-container/travel-options-container.component';
import { TravelOptionsListItemComponent } from './components/travel-options-list-item/travel-options-list-item.component';



@NgModule({
  declarations: [TravelOptionsContainerComponent, TravelOptionsListItemComponent],
  imports: [
    CommonModule
  ]
})
export class TravelOptionsModule { }
