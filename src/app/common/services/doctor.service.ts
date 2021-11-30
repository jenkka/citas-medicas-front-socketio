import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getDoctors(): Promise<any> {
    const url = environment.apiUrl + '/doctors';
    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }

  getOneDoctor(username: string): Promise<any> {
    const url = environment.apiUrl + '/doctors/' + username;
    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }
}
