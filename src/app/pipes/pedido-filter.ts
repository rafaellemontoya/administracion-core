import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroPedido'
})
export class FiltroPedidoPipe implements PipeTransform {


    transform(array: any[], terminoBusqueda: string) {

        if (!array || !terminoBusqueda) {
            return array;
        } else {

            return array.filter(asistente =>
               this.hola( asistente.taller_a, asistente.taller_b, asistente.taller_c).toLocaleLowerCase().indexOf(terminoBusqueda.toLocaleLowerCase()) !== -1);
        }

    }
    hola(idTallerA: string, dTallerB: string, dTallerC: string) {
        let nombreTaller = '-';
        if (idTallerA === '1') {
                nombreTaller = 'walmart';
            } else if (dTallerB === '1') {
                nombreTaller = 'linkedin';
            } else if (dTallerC === '1') {
                nombreTaller = 'ideo u';
            }
        return nombreTaller;
    }

}
