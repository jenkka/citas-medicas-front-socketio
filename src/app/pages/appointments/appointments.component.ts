import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Appointment } from 'src/app/common/datatypes/appointment';
import { AppointmentService } from 'src/app/common/services/appointment.service';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private AppointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.AppointmentService.getAppointments().then(response=> {
      this.appointments = response;
    }).catch(e => {
      console.log('Error: ', e);
    })
  }


}