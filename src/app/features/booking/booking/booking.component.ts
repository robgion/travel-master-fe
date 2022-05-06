import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { Booking } from 'src/app/shared/model/booking-model';

@Component({
  selector: 'fin-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent  {

  listaPren: Booking[] = [];

 
    deleteBookingHandler(bookingId: number): void {
    this.bookingService.deleteBooking(bookingId).subscribe(
       _response => {
          this.listaPren = this.listaPren.filter(
            el => el.id !== bookingId
          );
       },
      err => console.log(err)
    ) ;
  }

  

  constructor(private router: Router,private bookingService: BookingService) {
   this.bookingService.riempiLista().subscribe(
      (result) => {
        this.listaPren = result;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log('Dopo esecuzione del service');
  }
   }

