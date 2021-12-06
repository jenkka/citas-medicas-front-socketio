import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  attemptSignup(doc: any): Promise<any> {
    const url = environment.apiUrl + "/clients";
    const body = {
      username: doc.username,
      name: doc.name,
      lastname: doc.lastname,
      gender: doc.gender,
      age: doc.age,
      email: doc.email,
      password: doc.password
    }
    return this.http.post(url, body, { responseType: 'text' }).toPromise();
  }

  tryGoogleLogin(): void {
    window.location.href = "//ma-back.herokuapp.com/api/auth/google?signup=true";
  }
}
