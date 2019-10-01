import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroId'
})
export class FiltroIdPipe implements PipeTransform {
    transform(array: any[], terminoBusqueda: string) {
        if (!array || !terminoBusqueda) {
            return array;
        }
        return array.filter(asistente =>

            String(asistente.id_registro).toLocaleLowerCase().indexOf(terminoBusqueda.toLocaleLowerCase()) !== -1);
    }
}
