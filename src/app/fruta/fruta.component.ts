import { Component } from "@angular/core";

// El decorador es para indicarle unas propiedadedes básicas al componente
@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html',
})
export class FrutaComponent{
    // Cómo mostramos las propiedades en el html ?
    // Se utiliza la doble llave del binding por interpolación

    // también se pueden definir las propiedades con private 
    public nombre_component = 'Componente de fruta'; 
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string = 'Dereck Muñoz';
    public edad:number = 12;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpintero', 'Albañil', 'Fontanero']
    public trabajos2:Array<any> = ['Carpintero', 2, 'Fontanero']


    // El constructor es lo primero que se ejecuta dentor de una clase
    constructor(){
        console.log(this.trabajos);
    }

}