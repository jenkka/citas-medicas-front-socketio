import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from './session.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute,
              private sessionService: SessionService, private router: Router) { }

  tryGoogleLogin(): void {
    // const url = environment.apiUrl + "/auth/google";
    // return this.http.get(url, { responseType: 'text' }).toPromise();
    window.location.href = "//localhost:3001/api/auth/google?signup=false";
  }

  attemptLogin(email: string, password: string): Promise<any> {
    const url = environment.apiUrl + "/auth/login";
    const token = localStorage.getItem('ma-token') || '';
    const body = { email: email, password: password, token: token };
    console.log('Fetching data from', url);
    return this.http.post(url, body, { responseType: 'text' }).toPromise();
  }

  checkToken(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        let token = params['token'] || localStorage.getItem('ma-token');
        if (token) {
          console.log('attempting login')
          localStorage.setItem('ma-token', token);
          this.attemptLogin('', '')
            .then(result => {
              this.goToPage('/home');
              console.log('could login', result)
              result = JSON.parse(result);
              localStorage.setItem('ma-token', result.token);
              this.sessionService.setUsername(result.user);
              this.sessionService.setLoginState(true);

              if (result.doctorStatus) {
                console.log('is doctor')
                this.sessionService.setDoctorState(true);
              }
              console.log('Login successful');
            })
            .catch(err => {
              console.log('Could not login')
              // localStorage.removeItem('ma-token');
              // this.activatedRoute.queryParams.
            });
        }
      });
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
