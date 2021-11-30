import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/common/datatypes/appointment';
import { AppointmentService } from 'src/app/common/services/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment | undefined;
  id: string = '';

  selectedFile!: File;
  
  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    })
  }

  ngOnInit(): void {
    this.appointmentService.getOneAppointment(this.id).then(response => {
      this.appointment = response;
      //console.log('appointment', this.appointment?.documents)
    }).catch(err => {
      console.log(err);
    })
  }

  selectImage(event: any){
    this.selectedFile= <any>event.target.files[0];
    console.log(<File>event.target.files[0]);
  }  

  FileUpload(){
    //console.log(imageB);
    const image = new FormData();//
    image.append('image', this.selectedFile, this.selectedFile.name);
    // console.log(this.id);
    
    this.http.post('http://localhost:3001/api/appointments/'+ this.id ,image, { responseType: 'text' }).subscribe(response =>{
      if (response) {
        this.appointmentService.getOneAppointment(this.id).then(response => {
          this.appointment = response;
          //console.log('appointment', this.appointment?.documents)
        }).catch(err => {
          console.log(err);
        })
      }
    })
  }
}