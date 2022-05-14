import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { Booking } from 'src/app/shared/model/booking-model';

@Component({
  selector: 'fin-booking-container',
  templateUrl: './booking-container.component.html',
  styleUrls: ['./booking-container.component.css']
})

export class BookingContainerComponent {

  listaPren: Booking[] = [];

  constructor(private router: Router, private bookingService: BookingService) {


    this.bookingService.getAllBooking().subscribe(
      result => {
        this.listaPren = result;
      },
      err => {
        console.log(err);
      }
    );

  }

  deleteBookingHandler(bookingId: number): void {
    this.bookingService.deleteBooking(bookingId).subscribe(
      _response => {
        this.listaPren = this.listaPren.filter(
          el => el.id !== bookingId
        );
      },
      err => console.log(err)
    );
  }

  showBookingHandler = (bookingId: number) => this.router.navigateByUrl(`booking/show/${bookingId}`);
  editBookingHandler = (bookingId: number) => this.router.navigateByUrl(`booking/edit/${bookingId}`);

}

