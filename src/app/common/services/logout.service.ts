import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http: HttpClient) { }

  attemptLogout(): Promise<any> {
    const token = localStorage.getItem('ma-token');
    const url = environment.apiUrl + "/auth/logout/" + token;
    console.log('Fetching data from', url);
    return this.http.get(url, { responseType: 'text' }).toPromise();
  }
}
