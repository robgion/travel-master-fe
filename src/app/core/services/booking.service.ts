import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingService {

riempiLista(){
return this.http.get('http://localhost:3000/prenotazioni')

}

  constructor(private http:HttpClient) {
   }
}
