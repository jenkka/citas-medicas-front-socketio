import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from 'src/app/common/services/login.service';
import { SessionService } from 'src/app/common/services/session.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() email: string = '';
  @Input() password: string = '';

  constructor(private router: Router, public loginService: LoginService,
              private sessionService: SessionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.queryParams
    //   .subscribe(params => {
    //     let token = params['token'] || localStorage.getItem('ma-token');
    //     if (token) {
    //       console.log('attempting login')
    //       localStorage.setItem('ma-token', token);
    //       this.loginService.attemptLogin('', '')
    //         .then(result => {
    //           console.log('could login', result)
    //           result = JSON.parse(result);
    //           this.goToPage('/home');
    //           localStorage.setItem('ma-token', result.token);
    //           this.sessionService.setUsername(result.user);
    //           this.sessionService.setLoginState(true);

    //           if (params['doctor'] === 'true') {
    //             this.sessionService.setDoctorState(true);
    //           }
    //           console.log('Login successful');
    //         })
    //         .catch(err => {
    //           console.log('Could not login')
    //           localStorage.removeItem('ma-token');
    //           // this.activatedRoute.queryParams.
    //         });
    //     }
    //   });
  }

  googleLogin(): void {
    this.loginService.tryGoogleLogin();
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  login(): void {
    this.loginService.attemptLogin(this.email, this.password)
      .then(doc => {
        doc = JSON.parse(doc);
        localStorage.setItem('ma-token', doc.token);
        this.sessionService.setUsername(doc.user);
        this.sessionService.setLoginState(true);

        if (doc.doctor) {
          this.sessionService.setDoctorState(true);
        }
        console.log('token:', doc.token, ';');
        console.log(this.sessionService.getSessionData())

        this.goToPage('/home');
        console.log('Login successful');
      })
      .catch(err => {
        if (err.status === 404) {
          console.log('Email or password is incorrect');
        }
      });
  }
}
