import { Component } from '@angular/core';
import { Color, Heroes } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{
  enMayuscula: boolean = false;
  ordenarPor: string = ''

  heroes: Heroes [] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  cambiar(){
    this.enMayuscula = !this.enMayuscula;
}
  cambiarOrden( valor: string){
    this.ordenarPor = valor;
  }
}
