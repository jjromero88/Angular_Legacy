import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prueba-paises',
  templateUrl: './prueba-paises.component.html'

})
export class PruebaPaisesComponent implements OnInit {

  paises: any[] = [];

  constructor( private http: HttpClient ) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( (data: any[]) => {
      this.paises = data;
    });
  }

  ngOnInit(): void {
  }

}
