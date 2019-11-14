import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../interfaces/asistente.interface';
import { GuardarInfoService } from '../../services/guardar-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit {

  guardado = false;
  
  errorCoincidenciaCorreo = false;
  asistente: Asistente;

  constructor(private location: Location, private guardarService: GuardarInfoService) {
    this.asistente = new Asistente();
   }

  ngOnInit() {
  }

  guardarAsistente() {
    this.asistente.requiereHotel = '0';
    console.log(this.asistente);
    switch (this.asistente.nombretaller) {
      case '1':
        this.asistente.tallerA = 1;

        this.asistente.tallerB = 0;
        this.asistente.tallerC = 0;
        break;
        case '2':
          this.asistente.tallerB = 1;
          this.asistente.tallerA = 0;
          this.asistente.tallerC = 0;
          break;
          case '3':
            this.asistente.tallerC = 1;
            this.asistente.tallerA = 0;
            this.asistente.tallerB = 0;
            break;
    }

    this.guardarService.nuevoParticipante(this.asistente).subscribe ( (data) => {

      // tslint:disable-next-line:no-string-literal
      if (data['estado'] === 1) {
        console.log('si guardó ' + data['id']);
        this.guardado = true;
        this.generarPDF(data['id']);
        window.scroll(0, 0);
      } else {
        console.log('No guardó' + data);
      }
    });

  }
  generarPDF(id: string) {
    const asistente = new Asistente();
    asistente.id = id;
    this.guardarService.generarPDF(asistente).subscribe((data) => {
      console.log(data);
      this.imprimirPDF(asistente);
    });
  }
  imprimirPDF(asistente: Asistente){
    this.guardarService.imprimirParticipante(asistente).subscribe((data) => {
      console.log(data);

    });
  }
  atras() {
    this.location.back();
  }
}
