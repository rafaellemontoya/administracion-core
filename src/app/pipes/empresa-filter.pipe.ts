import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filtroEmpresa'
})
export class FiltroEmpresaPipe implements PipeTransform {
    transform(array: any[], terminoBusqueda: string) {
        if (!array || !terminoBusqueda) {
            return array;
        }
        return array.filter(asistente =>

            this.hola( asistente.id_empresa).toLocaleLowerCase().indexOf(terminoBusqueda.toLocaleLowerCase()) !== -1);
    }
    hola(idEmpresa: string) {
        let texto = '';
        switch (idEmpresa) {
      case '1':
        texto = 'BX+';
        break;
        case '2':
          texto = 'Byline Bank';
          break;
      case '3':
        texto = 'Elementia';
        break;
        case '4':
            texto = 'Kaluz';
            break;
            case '5':
                texto = 'Orbia';
                break;

    }
        return texto;
    }
}
