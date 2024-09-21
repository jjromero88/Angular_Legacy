import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Juan Jose',
    apellido: 'Romero',
    email: 'juanjor1988@gmail.com',
    pais: '',
    genero: 'M'
  };

  paises: any[] = [];

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {

    this.paisService.getPaises()
    .subscribe( paises => {
      this.paises = paises;

      this.paises.unshift({
        nombre: '[Seleccionar Pais]',
        codigo: ''
      });
    });
  }

  Guardar( forma: NgForm ){
    console.log(forma);

    if (forma.invalid) {

      Object.values( forma.controls ).forEach( control => {
        control.markAllAsTouched();
      });

      return;
    }

    console.log(forma.value);
  }

}
