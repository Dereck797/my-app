import { Component } from "@angular/core";
import { Empleado } from "./empleado";
@Component({
    selector:'empleado',
    templateUrl:'./empleado.component.html'
})
export class EmpleadoComponent{
    
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Dereck Muñoz',25, 'Ing Sistemas', true);
        let empleado1:Empleado = new Empleado('Dereck Muñoz',26, 'Ing Sistemas', false);
        let empleado2:Empleado = new Empleado('Angie Martinez',25, 'Cosita linda', true);
        //this.trabajadorers = new Array<Empleado>(empleado1,empleado2);
        this.trabajadores = [
            empleado1,
            empleado2
        ];

        this.trabajador_externo = true;
        this.color = 'green';
        this.color_seleccionado = '#ccc'
        console.log(this.trabajadores);
    }


    cambiarExterno(valor:boolean){
        this.trabajador_externo = valor;
    }

}