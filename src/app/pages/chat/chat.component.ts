import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ChatService } from 'src/app/common/services/chat.service';
import { SessionService } from 'src/app/common/services/session.service';
import { AppointmentService } from 'src/app/common/services/appointment.service';
import { Message } from 'src/app/common/datatypes/message';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  appointmentId: string = '';
  msg: string = '';
  messages: string[] = [];
  textField = new FormControl('');

  constructor(private chatService: ChatService, private session: SessionService,
              private aRoute: ActivatedRoute, private appointmentsService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentId = this.aRoute.snapshot.paramMap.get('id') || '';
    this.chatService.connectToRoom(this.appointmentId);

    this.appointmentsService.getOneAppointment(this.appointmentId)
      .then(results => {
        console.log('length', results)
        if (results.messages.length > 0) { 
          console.log('doing for each')
          results.messages.forEach((entry: Message) => {
            let msg = `<strong>${entry.user}:</strong> ${entry.content}`;
            this.messages.push(msg);
          });
        }
      });

    this.chatService.onNewMessage().subscribe(data => {
      let msg = `<strong>${data.user}:</strong> ${data.content}`;
      this.messages.push(msg);
    });
  }

  doOnSubmit(): void {
    this.messages.push(`<strong>${this.session.getUsername()}:</strong> ${this.msg}`);
    this.chatService.sendMessage(this.appointmentId, this.msg);
    this.textField.setValue('');
  }
}
