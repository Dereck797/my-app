import { Component } from '@angular/core';

// Cuando una etiqueta tiene un @ quiere decir que es un decorador
// Estos nos permiten aportar caracteristicas extra a las clases
// y condicionan el comportamiento de las mismas dependiendo de los 
// metadatos o propiedades que tengan. 


// 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curso Ángular Victor Robles';
}
