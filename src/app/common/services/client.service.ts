import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(): Promise<any> {
    const url = environment.apiUrl + '/clients';
    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }

  getOneClient(username: string): Promise<any> {
    const url = environment.apiUrl + '/clients/' + username;
    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }
}
