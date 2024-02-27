import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // nombre: string = 'lUis jOEl'

  // mostrarNombre(){
  //   console.log(this.nombre);
  // 
  constructor(private primengConfig:PrimeNGConfig){
  }
  // agrega efecto ripple en los toggles
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

}