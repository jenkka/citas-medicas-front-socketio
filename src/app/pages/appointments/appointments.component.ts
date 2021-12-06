import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Appointment } from 'src/app/common/datatypes/appointment';
import { AppointmentService } from 'src/app/common/services/appointment.service';
import { SessionService } from 'src/app/common/services/session.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];
  username = '';
  constructor(private AppointmentService: AppointmentService, public sessionService: SessionService) { }
     

  ngOnInit(): void {
    this.AppointmentService.getAppointments().then(response=> {
      this.appointments = response;
      this.username = this.sessionService.getUsername();
      //console.log(appointment.doctor_username)
      
    }).catch(e => {
      console.log('Error: ', e);
    })
  }


}