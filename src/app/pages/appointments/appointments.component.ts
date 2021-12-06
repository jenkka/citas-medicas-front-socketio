import { Component, OnInit } from '@angular/core';

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
  username: string = '';
  constructor(private AppointmentService: AppointmentService, public sessionService: SessionService) { }
     

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.AppointmentService.getAppointments().then(response=> {
      response.forEach((appointment: any) => {
        if (this.sessionService.getUsername() == appointment.client_username || this.sessionService.isDoctor) {
          this.appointments.push(appointment);
        }
      })
      
      this.username = this.sessionService.getUsername();
      console.log(this.appointments);
    }).catch(e => {
      console.log('Error: ', e);
    })
  }
}