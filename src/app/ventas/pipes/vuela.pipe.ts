import { Pipe, PipeTransform } from "@angular/core";
import { Heroes } from "../interfaces/ventas.interfaces";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform(value: Heroes){
     //   console.log(value.vuela);
        return (value.vuela)? 'vuela' : 'no vuela';
    }
}