import { Component, OnInit } from '@angular/core';

import { AppointmentService } from 'src/app/common/services/appointment.service';
import { Appointment } from 'src/app/common/datatypes/appointment';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];

  constructor(private appointmentSservice: AppointmentService) { }

  ngOnInit(): void {
    this.getRelatedAppointments();
  }

  getRelatedAppointments() {
    this.appointmentSservice.getRelatedAppointments()
      .then(results => {
        this.appointments = results;
      })
      .catch(err => {
        console.log(err);
      })
  }
}
