import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(imagenes: any[], varias: boolean = false) {

    if (varias){
      if (imagenes.length > 0){
        return imagenes;
      }
    }

    if (!imagenes) {
      return 'assets/img/noimage.png';
    }

    if (imagenes.length > 0){
      return imagenes[0].url;
    }
    else{
      return 'assets/img/noimage.png';
    }
  }

}
