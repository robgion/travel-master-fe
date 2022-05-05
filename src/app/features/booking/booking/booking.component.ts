import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/shared/model/booking-model';

@Component({
  selector: 'fin-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {

  listaPren:Booking []=[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
