import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Sandra';
  genero: string = 'femenino';

  invitationMap = {
    'masculino':'invitarlo',
    'femenino' :'invitarla'
  }
  //i18nPlural
  clientes: string[] = ['Maria','Pedro','Gusravo','Fernando'];
  clientMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre = 'Luis Joel';
    this.genero = 'masculino';
  }

  borrarCliente(){
    this.clientes.pop();
   }

   //Keyvalue pipe
   persona = {
    nombre: 'Luis Joel',
    edad: 27,
    direccion: 'Dallas TX, USA'  
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Wonder Woman',
      vuela: true
    },
  ]

  //Async pipe
  miObservable = interval(5000); 

  valorPromesa = new Promise((resolve, rejects)=>{
    setTimeout(()=>{
      resolve ('Tenemos el valor de la promesa');
    },3500);  //retorna el valor de la promesa al pasar 3500ms
  })
}
