import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

    nombreLower: string = 'luis joel';
    nombreUpper: string = 'LUIS JOEL';
    nombreCompleto: string = 'lUIs jOEl';

    fecha = new Date(); // dia de Hoy

}
