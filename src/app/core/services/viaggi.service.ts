import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Viaggi } from 'src/app/shared/model/viaggi-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViaggiService {

  constructor(private http: HttpClient) { }

  public getViaggi(id_mezzo: any[], luogo_partenza: string, luogo_arrivo: string): Observable<Viaggi[]> {
    const url = environment.baseUrl + '/viaggi/';

    let queryParams = new HttpParams()
    id_mezzo.forEach(element => {
      queryParams = queryParams.append("id_mezzo", element);
    });
    queryParams = queryParams.append("luogo_partenza", luogo_partenza);
    queryParams = queryParams.append("luogo_arrivo", luogo_arrivo);
    console.log(queryParams);

    return this.http.get<Viaggi[]>(url, { params: queryParams });
  }
}
