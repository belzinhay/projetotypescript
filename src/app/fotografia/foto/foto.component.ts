
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent implements OnInit {
  
  @Input() img = "";
 
  ngOnInit(): void { }



}