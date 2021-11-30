import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/common/datatypes/client';
import { ClientService } from 'src/app/common/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients().then(response=> {
      this.clients = response;
    }).catch(e => {
      console.log('Error: ', e);
    })
  }


}
