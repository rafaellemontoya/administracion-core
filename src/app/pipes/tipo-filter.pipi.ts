import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroTipo'
})
export class FiltroTipoPipe implements PipeTransform {
    transform(array: any[], terminoBusqueda: string) {
        if (!array || !terminoBusqueda) {
            return array;
        }
        return array.filter(asistente =>

            String(asistente.tipoAsistente).toLocaleLowerCase().indexOf(terminoBusqueda.toLocaleLowerCase()) !== -1);
    }
}
