import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    let retorno: string;
    if (activar){
      retorno = '**********';
    }
    else{
      retorno = value;
    }
    return retorno;
  }

}
