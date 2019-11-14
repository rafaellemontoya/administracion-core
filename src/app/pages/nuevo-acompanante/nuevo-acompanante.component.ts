import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../interfaces/asistente.interface';
import { GuardarInfoService } from '../../services/guardar-info.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nuevo-acompanante',
  templateUrl: './nuevo-acompanante.component.html',
  styleUrls: ['./nuevo-acompanante.component.css']
})

export class NuevoAcompananteComponent implements OnInit {

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

