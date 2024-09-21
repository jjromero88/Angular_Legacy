import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url = 'https://crud-d7f82.firebaseio.com';


  constructor( private http: HttpClient ) { }

  private getApiKey(){
    const ApiKey = '48c1c8235c141dc79766964d464db2d4';

    return ApiKey;
  }

  getMovies(){
    const key = this.getApiKey();
    return this.http.get(`https://api.themoviedb.org/3/movie/550?api_key=${key}&callback=test`);
  }
  
  
}
