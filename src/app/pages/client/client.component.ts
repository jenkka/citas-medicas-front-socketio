import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Client } from 'src/app/common/datatypes/client';
import { ClientService } from 'src/app/common/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  client: Client | undefined;
  username: string = '';
  imgnum = Math.random();
  constructor(private clientService: ClientService, private route: ActivatedRoute) {
    this.route.params.subscribe((params: any) => {
      this.username = params.username;
    })
  }

  ngOnInit(): void {
    this.clientService.getOneClient(this.username).then(response => {
      this.client = response;
      console.log('Client', this.client)
    }).catch(err => {
      console.log(err);
    })
  }

}
