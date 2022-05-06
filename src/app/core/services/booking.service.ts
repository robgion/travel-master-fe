import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/model/booking-model';
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

  public createBooking(id_viaggio: number, nome: string, cognome: string, posti: number): Observable<any> {
    const url = environment.baseUrl + '/prenotazioni';
    console.log(nome);

    const prenotazione: Booking = { nome: nome, cognome: cognome, posti_prenotati: posti, id_viaggio: id_viaggio, id: this.getRandomInt(1000) }
    return this.http.post(url, prenotazione);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}

