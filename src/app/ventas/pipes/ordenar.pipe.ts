import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(value: Heroes[], ordenarPor: string = 'sin valor' ): Heroes[] {
    
    switch (ordenarPor) {
      case 'nombre':
        return value.sort( (a,b) => (a.nombre > b.nombre)? 1 : -1 );
      
      case 'vuela':
        return value.sort( (a,b) => (a.vuela > b.vuela)? -1 : 1 );  // boolean ordena 0 > 1
    
      case 'color':
        return value.sort( (a,b) => (a.color > b.color)? 1 : -1 );  

      default:
        return value;
    }
  }
  //   console.log(ordenarPor)

  //   if( ordenarPor === 'sin valor'){
  //     return value;
  //   } else {
  //     value = value.sort( (a,b) => (a.nombre > b.nombre)? 1 : -1 );
  //   }

  //   return value;
  // }

}
