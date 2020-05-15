import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limpiarArrary'
})
export class LimpiarArraryPipe implements PipeTransform {

  transform(value: string[]): String {

    console.log(value.join(','));

    let info = value.join(',');

    let mostrar = info.replace(/[^a-zA-Z ]/g, "");

    return mostrar;
  }

}
