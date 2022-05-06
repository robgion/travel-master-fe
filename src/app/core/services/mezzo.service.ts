import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mezzi } from 'src/app/shared/model/mezzi-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MezzoService {

  constructor(private http: HttpClient) { }

  public getMezzo(tipo_mezzo: string): Observable<Mezzi[]> {
    const url = environment.baseUrl + '/mezzi?tipo='+tipo_mezzo;
    return this.http.get<Mezzi[]>(url);
  }
}
