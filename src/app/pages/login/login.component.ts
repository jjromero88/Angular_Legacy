import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../Models/usuario.models';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from '../../../assets/js/sweetalert2/package/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor( private auth: AuthService
            ,  private router: Router ) { }

  ngOnInit() {
    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true;
    }
  }

  login( form: NgForm ) {

    if (form.invalid ) {
      return;
    }

    Swal.fire({
      title: 'Info',
      text: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'OK'
    });
    Swal.showLoading();


    this.auth.logIn( this.usuario ).subscribe(
      resp => {

        console.log(resp);
        Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');
      },
      err => {

        console.log(err.error.error.message);
        Swal.fire({
          title: 'Error de autenticacion',
          icon: 'error',
          text: err.error.error.message
        });

      });

  }

}
