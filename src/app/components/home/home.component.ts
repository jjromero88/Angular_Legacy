import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'

})
export class HomeComponent {

nuevasCanciones: any[] = [];
loading: boolean;
error: boolean;
errorMessage: string;

  constructor( private spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      this.errorMessage = errorServicio.error.error.message;
    });
  }

}
