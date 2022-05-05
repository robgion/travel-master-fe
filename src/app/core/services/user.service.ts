import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUserAuth(username: string, password: string): Observable<User> {
    const url = environment.baseUrl + '/users/';

    let queryParams = new HttpParams()
    queryParams = queryParams.append("username", username);
    queryParams = queryParams.append("password", password);
    console.log(queryParams);


    return this.http.get<User>(url, { params: queryParams });
  }
}

