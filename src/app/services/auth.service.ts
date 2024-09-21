import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../Models/usuario.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url = 'https://identitytoolkit.googleapis.com/v1/accounts';
private API_KEY = 'AIzaSyCMuHWDDKWUq6jolNMGy8tVs3I3N7I-OwQ';
userToken: string;

  constructor( private http: HttpClient ) {
    this.leerToken();
  }

logOut() {
  localStorage.removeItem('token');
}

logIn(usuario: UsuarioModel) {

  const authData = {
    email: usuario.email,
    password: usuario.password,
    returnSecureToken: true
  };

  return this.http.post(`${ this.url }:signInWithPassword?key=${this.API_KEY}`,
                         authData).pipe(
                          map( resp => {
                            this.guardarToken(resp['idToken']);
                            return resp;
                          })
                        );

}

nuevoUsuario(usuario: UsuarioModel) {

const authData = {
  email: usuario.email,
  password: usuario.password,
  returnSecureToken: true
};

return this.http.post(`${ this.url }:signUp?key=${this.API_KEY}`,
                       authData).pipe(
                         map( resp => {
                           this.guardarToken(resp['idToken']);
                           return resp;
                         })
                       );

}

private guardarToken( idToken: string ) {
  this.userToken = idToken;
  localStorage.setItem('token', idToken);

  let hoy = new Date();
  hoy.setSeconds( 3600 );
  localStorage.setItem('expira', hoy.getTime().toString());

}

private leerToken() {

  if ( localStorage.getItem('token') ) {
    this.userToken = localStorage.getItem('token');
  } else {
    this.userToken = '';
  }

  return this.userToken;
}

estaAutenticado(): boolean {

  if (this.userToken.length < 2) {
    return false;
  }

  const expira = Number(localStorage.getItem('expira'));
  const expiraDate = new Date();
  expiraDate.setTime(expira);

  if ( expiraDate > new Date()) {
    return true;
  } else {
    return false;
  }

  return this.userToken.length > 2;
}

}

