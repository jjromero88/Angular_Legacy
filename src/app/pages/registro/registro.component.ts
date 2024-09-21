import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../Models/usuario.models';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from '../../../assets/js/sweetalert2/package/dist/sweetalert2.js';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {

  usuario: UsuarioModel;
  recordarme: false;

  constructor( private auth: AuthService,
               private router: Router ) { }

  ngOnInit() {

    this.usuario = new UsuarioModel();

  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Info',
      text: 'Espere por favor...',
      icon: 'info',
      confirmButtonText: 'OK'
    });
    Swal.showLoading();

    this.auth.nuevoUsuario( this.usuario )
    .subscribe( resp => {

      console.log(resp);
      Swal.close();

      if ( this.recordarme ) {
        localStorage.setItem( 'email', this.usuario.email );
      }

      this.router.navigateByUrl('/home');

    }, (err) => {

      console.log(err.error.error.message);
      Swal.fire({
          title: 'Error en el registro',
          icon: 'error',
          text: err.error.error.message
        });

    });
  }


}
