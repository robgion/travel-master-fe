import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotingBookingModule } from './routing-booking.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingComponent } from '../booking/booking.component';




@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    RotingBookingModule,
    SharedModule
    
  ]
})
export class BookingModuleModule { }
