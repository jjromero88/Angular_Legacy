import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

 artista: any = {};
 loading: boolean;
 topTracks: any[] = [];

  constructor(private router: ActivatedRoute,
              private spotifyService: SpotifyService) {

    this.router.params.subscribe( params => {

      this.getArtista(params.id);
      this.getTopTracks(params.id);

    });

  }

  getArtista(id: string){
    this.loading = true;
    this.spotifyService.getArtista(id)
    .subscribe( artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTracks(id: string){
    this.loading = true;
    this.spotifyService.getTopTracks(id)
      .subscribe( tracks => {
        console.log(tracks);
        this.topTracks = tracks;
        this.loading = false;
      });
  }

}
