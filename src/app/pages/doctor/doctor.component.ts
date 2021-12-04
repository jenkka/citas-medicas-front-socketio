import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Doctor } from 'src/app/common/datatypes/doctor';
import { DoctorService } from 'src/app/common/services/doctor.service';
import { NgbModal, ModalDismissReasons, NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})

export class DoctorComponent implements OnInit {
  time = {hour: 13, minute: 30};
  model: NgbDateStruct | undefined; ;
  closeResult = '';
  doctor: Doctor | undefined;
  username: string = '';

  constructor(private doctorService: DoctorService, private route: ActivatedRoute, private modalService: NgbModal) {
    
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

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
