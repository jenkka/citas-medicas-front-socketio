import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from 'src/app/common/services/session.service';
import { LoginService } from 'src/app/common/services/login.service';
import { LogoutService } from 'src/app/common/services/logout.service';
import { LoginComponent } from 'src/app/pages/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService,
              private logoutService: LogoutService, public sessionService: SessionService) { }

  ngOnInit(): void {
    this.loginService.checkToken();
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  logout(): void {
    this.logoutService.attemptLogout()
      .then(response => {
        this.goToPage('home');
        localStorage.removeItem('ma-token');
        this.sessionService.setLoginState(false);
      })
      .catch(err => {
        console.log('something went wrong while logging out')
        console.log(err)
      })
  }
}
