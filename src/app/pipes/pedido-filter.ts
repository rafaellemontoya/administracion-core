import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroPedido'
})
export class FiltroPedidoPipe implements PipeTransform {

    transform(array: any[], terminoBusqueda: string) {
        if (!array || !terminoBusqueda) {
            return array;
        }
        return array.filter(asistente =>

            String(asistente.id_taller).toLocaleLowerCase().indexOf(terminoBusqueda.toLocaleLowerCase()) !== -1);
    }
}
