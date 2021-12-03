import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
  randomNumber(){
    const randomNum = Math.floor((Math.random() * 100) + 1);
    const imgUrl = "https://randomuser.me/api/portraits/women/"+randomNum+".jpg"
    return imgUrl; 
  }
} 
