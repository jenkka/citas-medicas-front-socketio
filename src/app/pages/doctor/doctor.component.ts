import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Doctor } from 'src/app/common/datatypes/doctor';
import { DoctorService } from 'src/app/common/services/doctor.service';
import { NgbModal, NgbCalendar, ModalDismissReasons, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { SessionService } from 'src/app/common/services/session.service';



@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter<boolean>();
  model: NgbDateStruct | undefined;

  today = this.calendar.getToday();
  time = { hour: 13, minute: 30 };

  closeResult = '';
  doctor: Doctor | undefined;
  username: string = '';
  purpose: string = '';
  form: FormGroup;

  constructor(private fb: FormBuilder, public sessionService: SessionService, private doctorService: DoctorService, 
              private route: ActivatedRoute, private modalService: NgbModal, private calendar: NgbCalendar, 
              private http: HttpClient) {
    this.form = this.fb.group({
      'time': [this.time],
      'date': [this.today]
    })

    this.route.params.subscribe((params: any) => {
      this.username = params.username;
    })
  }

  ngOnInit(): void {
    console.log('session state', this.sessionService.isLoggedIn)
    this.doctorService.getOneDoctor(this.username).then(response => {
      this.doctor = response;
      console.log('Doctor', this.doctor)
    }).catch(err => {
      console.log(err);
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  create() {
    this.http.post('https://ma-back.herokuapp.com/api/appointments/', {
      'day': this.model?.day,
      'month': this.model?.month, 'year': this.model?.year, 'start_hour': this.time.hour,
      'start_minute': this.time.minute, 'end_hour': this.time.hour + 2,
      'end_minute': this.time.minute, 'purpose': this.purpose,
      'client_username': this.sessionService.getUsername(),
      'doctor_username': this.username
    }, { responseType: 'text' }).subscribe(response => {
      if (response) {
        console.log('appointment', response)
      }
    })
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
