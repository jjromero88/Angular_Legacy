import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html'
})
export class PruebaComponent implements OnInit {

data: any[] = [];

  constructor( private http: HttpClient,
              private peliculasService: PeliculasService ) { }

  ngOnInit(): void {
    this.peliculasService.getMovies().subscribe( (data: any[]) => {
      this.data = data;
      console.log(this.data);
    });
  }

}
