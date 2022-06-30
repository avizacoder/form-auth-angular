import { Injectable } from '@angular/core';

import { RegisterI } from '../../models/register.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = `https://us-central1-pasanaq-sol.cloudfunctions.net/app/api/users`;

  constructor(private http: HttpClient) { }

  //method post
  registerByEmail(form: RegisterI): Observable<RegisterI> {
    let endPoint = this.baseUrl + "login";
    return this.http.post<RegisterI>(endPoint, form);
  }


}
