import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/model/booking-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class BookingService {

private  listaPren:Booking []=[];



public deleteBooking(id_prenotazione: number): Observable<any> {

    const url = environment.baseUrl + '/prenotazioni/'+id_prenotazione;

    return this.http.delete<any>(url);

  }


riempiLista(): Observable<Booking[]>{
  const url = environment.baseUrl + '/prenotazioni/';
return this.http.get<Booking[]>(url)

}




  constructor(private http:HttpClient) {
   }
}
