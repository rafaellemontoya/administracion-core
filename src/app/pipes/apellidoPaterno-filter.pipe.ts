import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroApelllidoPaterno'
})
export class FiltroApellidoPaternoPipe implements PipeTransform {
    transform(array: any[], terminoBusqueda: string) {
        if (!array || !terminoBusqueda) {
            return array;
        }
        return array.filter(asistente =>

            String(asistente.apellido).toLocaleLowerCase().indexOf(terminoBusqueda.toLocaleLowerCase()) !== -1);
    }
}
