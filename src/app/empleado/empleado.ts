export class Empleado{

    // public nombre;
    // public edad;

    // constructor(nombre:any, edad:any){
    //     this.nombre = nombre;
    //     this.edad = edad;
    // }


    // El siguiente codigo es equivalente a las líneas anteriores 
    // en donde se definene los parámetros de la clase y el método constructor
    constructor(
        public nombre:string,
        public edad:number,
        public cargo:string,
        public contratado:boolean,
    ){}
}