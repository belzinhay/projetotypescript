import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagemHome = "https://cdn.pixabay.com/photo/2019/03/30/20/27/camera-4091991_960_720.png";
  constructor() { }

  ngOnInit(): void {
  }

}