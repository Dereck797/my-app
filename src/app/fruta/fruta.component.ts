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

    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<string> = ['Carpintero', 'Albañil', 'Fontanero']
    public trabajos2:Array<any> = ['Carpintero', 2, 'Fontanero']


    // El constructor es lo primero que se ejecuta dentor de una clase
    // Por buenas prácticas es mejor inicializar las variables en el constructor

    constructor(){
        this.nombre = 'Dereck Muñoz';
        this.edad = 26;
        this.mayorDeEdad = false;
    }

    // Este método es una comvención para llamar los métodos de la clase
    // Por buenas prácticas se debe hacer el llamado de métodos fuera del constructor
    // también es el primer método que se ejecuta luego de llamar al constructor
    ngOnInit(){
        this.holaMundo();
        this.holaMundo2();
    }

    holaMundo(){

    }

    holaMundo2 = () => {
        console.log('Arrow function');
    }

}