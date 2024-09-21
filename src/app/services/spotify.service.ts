import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery(query: string){
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      Authorization: 'Bearer BQAL_2FQ_9jNWP9oyaJ4gN5MzgMx8IqWCe_K8paa-xgbGxV0FP2zEctgDdmDAdKGuyy98RpF8V7dIk0whlU'
    });

     return this.http.get(url, { headers });
   }

   getNewReleases(){
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => {
      return data['albums'].items;
    }));
   }

   getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
     .pipe( map( data => {
      return data['artists'].items;
    }));
   }

   getArtista(id: string){
    return this.getQuery(`artists/${id}`)
     .pipe( map( data => {
      return data;
    }));
   }

   getTopTracks(id: string){
     return this.getQuery(`artists/${id}/top-tracks?country=us`)
     .pipe( map (data => {
       return data['tracks'];
     }));
   }

}
