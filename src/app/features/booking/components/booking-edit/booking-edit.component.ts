import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/core/services/booking.service';
import { ViaggiService } from 'src/app/core/services/viaggi.service';
import { Booking } from 'src/app/shared/model/booking-model';
import { Viaggi } from 'src/app/shared/model/viaggi-model';

@Component({
  selector: 'fin-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {

  selectBooking: Booking;
  selectTravel: Viaggi;

  loading: boolean = true;

  constructor(private bookingService: BookingService, private viaggiService: ViaggiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      next => {
        const id = next['bookingId'];
        this.loadBooking(id);
      }, err => {
        console.log(err);
      }
    )
  }

  private loadBooking(bookingId: number) {
    this.bookingService.getOneBooking(bookingId).subscribe(
      result => {
        this.selectBooking = result
        this.loadTravel(this.selectBooking.id_viaggio)

      }, error => {
        console.log(error);

      }
    )
  }

  private loadTravel(id_viaggio: number): void {
    this.viaggiService.getViaggio(id_viaggio).subscribe(
      result => {
        this.selectTravel = result;
        this.loading = false;
      }, error => {
        console.log(error);

      }
    )
  }

  editBookingByForm(selectBooking: NgForm) {

    console.log(selectBooking.value.nome);

    const obj: Booking = {
      nome: selectBooking.value.nome,
      id: this.selectBooking.id,
      id_viaggio: this.selectBooking.id_viaggio,
      cognome: this.selectBooking.cognome,
      posti_prenotati: this.selectBooking.posti_prenotati
    }

    this.bookingService.editBooking(obj).subscribe(
      next => {
        if (next) { this.router.navigateByUrl('booking') }

      }, error => {
        console.log(error);
      }
    )
  }

}
