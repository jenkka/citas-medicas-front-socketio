import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient, private session: SessionService) { }

  getAppointments(): Promise<any> {
    const url = environment.apiUrl + '/appointments';
    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }

  getRelatedAppointments(): Promise<any> {
    const url = environment.apiUrl + '/appointments?username=' + this.session.getSessionData().user;

    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }

  getOneAppointment(id: string): Promise<any> {
    const url = environment.apiUrl + '/appointments/' + id;
    console.log('Fetching data from', url);
    return this.http.get(url).toPromise();
  }
}