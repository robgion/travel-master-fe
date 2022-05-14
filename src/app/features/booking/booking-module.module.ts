import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotingBookingModule } from './routing-booking.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BookingContainerComponent } from './components/booking-container/booking-container.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BookingContainerComponent, BookingDetailsComponent, BookingEditComponent],
  imports: [
    CommonModule,
    RotingBookingModule,
    SharedModule,
    FormsModule

  ],
  exports: [
    BookingContainerComponent
  ]
})
export class BookingModuleModule { }
