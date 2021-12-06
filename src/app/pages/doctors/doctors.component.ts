import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/common/datatypes/doctor';
import { DoctorService } from 'src/app/common/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) { }
 
  ngOnInit(): void {
    this.doctorService.getDoctors().then(response=> {
      this.doctors = response;
    }).catch(e => {
      console.log('Error: ', e);
    })
  }
}
