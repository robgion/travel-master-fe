import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotingBookingModule } from './routing-booking.module';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RotingBookingModule,
    SharedModule
    
  ]
})
export class BookingModuleModule { }
