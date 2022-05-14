import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/model/booking-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookingService {

  constructor(private http: HttpClient) {
  }

  getAllBooking(): Observable<Booking[]> {
    const url = environment.baseUrl + '/prenotazioni';
    return this.http.get<Booking[]>(url);
  }

  getOneBooking(bookingId: number): Observable<Booking> {
    const url = environment.baseUrl + '/prenotazioni/' + bookingId;
    return this.http.get<Booking>(url);
  }

  public createBooking(prenotazione: Booking): Observable<Booking> {
    const url = environment.baseUrl + '/prenotazioni';
    return this.http.post<Booking>(url, prenotazione);
  }

  public editBooking(booking: Booking): Observable<Booking> {
    const url = environment.baseUrl + '/prenotazioni/' + booking.id
    return this.http.put<Booking>(url, booking);
  }

  public deleteBooking(id_prenotazione: number): Observable<any> {
    const url = environment.baseUrl + '/prenotazioni/' + id_prenotazione;
    return this.http.delete<any>(url);
  }

}

