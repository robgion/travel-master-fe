import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelFormContainerComponent } from './components/travel-form-container/travel-form-container.component';
import { FormsModule } from '@angular/forms';
import { TravelFormRoutingModule } from './travel-form-routing.module';



@NgModule({
  declarations: [
    TravelFormContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TravelFormRoutingModule
  ],
  exports: [
    TravelFormContainerComponent
  ]
})
export class TravelFormModule { }
