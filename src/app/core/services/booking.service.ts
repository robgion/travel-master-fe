import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/model/booking-model';
import { Viaggi } from 'src/app/shared/model/viaggi-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookingService {

  private listaPren: Booking[] = [];


  constructor(private http: HttpClient) {
  }

  public deleteBooking(id_prenotazione: number): Observable<any> {
    const url = environment.baseUrl + '/prenotazioni/' + id_prenotazione;
    return this.http.delete<any>(url);
  }


  riempiLista(): Observable<Booking[]> {
    const url = environment.baseUrl + '/prenotazioni/';
    return this.http.get<Booking[]>(url)
  }

  public createBooking(id_viaggio: number): Observable<number> {
    const url = environment.baseUrl + '/prenotazioni';
    const prenotazione: Booking = { nome: "Lucia", cognome: "Riva", posti_prenotati: 2, id_viaggio: id_viaggio, id: 50 }
    return this.http.post<number>(url, prenotazione);
  }

}
