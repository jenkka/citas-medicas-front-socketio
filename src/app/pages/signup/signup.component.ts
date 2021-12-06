import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SignupService } from 'src/app/common/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Input() username: string = '';
  @Input() name: string = '';
  @Input() lastname: string = '';
  @Input() gender: string = '';
  @Input() age: string = '';
  @Input() email: string = '';
  @Input() password: string = '';

  constructor(private signupService: SignupService, private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }

  signup(): void {
    let doc = {
      username: this.username,
      name: this.name,
      lastname: this.lastname,
      gender: this.gender,
      age: this.age,
      email: this.email,
      password: this.password
    }
    
    this.signupService.attemptSignup(doc)
      .then(response => {
        this.goToPage('login');
      })
      .catch(err => {
        console.log(err)
      })
  }

  googleSignup() {
    this.signupService.tryGoogleLogin();
  }
}
