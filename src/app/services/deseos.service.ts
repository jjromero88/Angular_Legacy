import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.mode';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();

    // const Lista1 = new Lista('Recolectar Piedras del infinito');
    // const Lista2 = new Lista('Heroes a desaparecer');
    // this.listas.push(Lista1, Lista2);

  }

  crearLista( titulo: string ){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();

    return nuevaLista.id;
  }

  obtenerLista( id: string | number ){

    id = Number(id);

    return this.listas.find( listaData => listaData.id === id );
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  cargarStorage(){

    if (localStorage.getItem('data')){
      this.listas = JSON.parse( localStorage.getItem('data') );
    } else {
      this.listas = [];
    }

  }

}
