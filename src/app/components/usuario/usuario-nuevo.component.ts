import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {
    this.router.parent.params.subscribe( parametros => {
      console.log('RUTA HIJA - USUARIO NUEVO');
      console.log(parametros);
    });
  }

  ngOnInit(): void {
  }

}
