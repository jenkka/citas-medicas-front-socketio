import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Doctor } from 'src/app/common/datatypes/doctor';
import { DoctorService } from 'src/app/common/services/doctor.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit {

  doctor: Doctor | undefined;
  username: string = '';

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.username = params.username;
    })
  }

  ngOnInit(): void {
    this.doctorService.getOneDoctor(this.username).then(response => {
      this.doctor = response;
      console.log('Doctor', this.doctor)
    }).catch(err => {
      console.log(err);
    })
  }

}
