import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookingContainerComponent } from './components/booking-container/booking-container.component';
import { BookingDetailsComponent } from './components/booking-details/booking-details.component';
import { BookingEditComponent } from './components/booking-edit/booking-edit.component';



const routes: Routes = [
  { path: '', component: BookingContainerComponent },
  { path: 'show/:bookingId', component: BookingDetailsComponent },
  { path: 'edit/:bookingId', component: BookingEditComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]

})
export class RotingBookingModule { }
