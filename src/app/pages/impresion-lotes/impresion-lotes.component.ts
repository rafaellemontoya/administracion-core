import { Component, OnInit } from '@angular/core';
import { GuardarInfoService } from '../../services/guardar-info.service';
import { Asistente } from '../../interfaces/asistente.interface';

@Component({
  selector: 'app-impresion-lotes',
  templateUrl: './impresion-lotes.component.html',
  styleUrls: ['./impresion-lotes.component.css']
})
export class ImpresionLotesComponent implements OnInit {

  constructor(private http: GuardarInfoService) { }

  ngOnInit() {
  }

  imprimir(id: number) {
    console.log(id);
    const as = new Asistente();
    as.id = id.toString();


    
  }
  imprimir2(id: string) {
    console.log(id);
  }

}
