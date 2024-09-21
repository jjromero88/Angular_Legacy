import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'jUan JOsE rOmeRO';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.2345644;
  salario = 1234.54594788734;
  fecha = new Date();
  idioma = 'en';
  videoUrl = 'https://www.youtube.com/embed/O71YjuC4xPU';
  activar:boolean = true;

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  } );

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      classe: 'Primera',
      casa: 20
    }
  };

}
