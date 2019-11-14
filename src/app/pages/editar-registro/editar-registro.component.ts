import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuardarInfoService } from 'src/app/services/guardar-info.service';
import { Asistente } from '../../interfaces/asistente.interface';
import { Location } from '@angular/common';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css']
})
export class EditarRegistroComponent implements OnInit {

  constructor( private location: Location, private route: ActivatedRoute, private http: GuardarInfoService, 
               private calendar: NgbCalendar) { }

  idRecibido = '';
  asistente = new Asistente();
  guardado = false;
  modellegada: NgbDateStruct;
  modelsalida: NgbDateStruct;
  correoEnviado = false;

  ngOnInit() {
    this.route.params
    .subscribe( parametros => {
    this.idRecibido = parametros.id;
    console.log(parametros.id);
    this.obtenerInformacion(this.idRecibido);
    // this.obtenerInformacion(parametros['id']);

});
  }

  guardarAsistente() {

    // console.log('dia->' + this.modellegada.day);
    // console.log('fecha->' + this.modellegada.year + '-'+ this.modellegada.month + '-'+ this.modellegada.day);
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
    if (this.modellegada !== undefined) {
      this.asistente.fechaLlegada = this.modellegada.year + '-' + this.modellegada.month + '-' + this.modellegada.day;
    }
    if (this.modelsalida !== undefined){
      this.asistente.fechaRegreso = this.modelsalida.year + '-' + this.modelsalida.month + '-' + this.modelsalida.day;
    }


    // this.asistente.idtaller = this.asistente.nombretaller;
    this.http.editarParticipante(this.asistente).subscribe((data) => {
      console.log(data);
      if (data['respuesta'] === 1) {
        this.guardado = true;
        window.scroll(0, 0);

      }
    });

  }
  /*generarPDF(id: string) {
    const asistente = new Asistente();
    asistente.id = id;
    this.http.generarPDF(asistente).subscribe((data) => {
      console.log(data);
      this.imprimirPDF(asistente);
    });
  }*/
  imprimirPDF(asistente: Asistente) {
    this.http.imprimirParticipante(asistente).subscribe((data) => {
      console.log(data);

    });
  }

  atras() {
    this.location.back();
  }
  obtenerInformacion(id: string) {
    this.asistente.id = id;
    this.http.obtenerParticipante(this.asistente).subscribe((data) => {
      console.log (data);
      this.asistente.nombre = data['nombre'];
      this.asistente.apellido = data['apellido'];
      this.asistente.email = data['email'];
      this.asistente.puesto = data['puesto'];
      this.asistente.nombreAyudante = data['nombre_ayudante'];
      this.asistente.emailAyudante = data ['email_ayudante'];
      this.asistente.empresa = this.getNombreEmpresa(data['id_empresa']);
      this.asistente.idEmpresa = data['id_empresa'];
      this.asistente.requerimientoDieta = data['requerimiento_dieta'];
      this.asistente.requiereHotel = data['requiere_hotel'];
      this.asistente.fechaLlegada = data['fecha_llegada'];
      this.asistente.fechaRegreso = data['fecha_regreso'];
      this.asistente.nombretaller = this.getNombreTaller(data['taller_a'], data['taller_b'], data['taller_c']);
      this.asistente.idAcompanante = data ['id_acompanante'];
      this.asistente.nombreAcompanante = data ['nombre_acompanante'];
      this.asistente.apellidoAcompanante = data ['apellido_acompanante'];
      this.asistente.requerimientoEspcialAcompanante = data ['requerimiento_especial_acompanante'];
      this.asistente.requerimientoDietaAcompanante = data ['requerimiento_dieta_acompanante'];
      this.asistente.tallerAcompananteA = data ['taller_a_acompanate'];
      this.asistente.tallerAcompananteB = data ['taller_b_acompanate'];
      this.asistente.tallerAcompananteC = data['taller_c_acompanate'];



    });
  }

  getNombreEmpresa(idEmpresa: string) {

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
  getRequiereHotel(requiereHotel) {
    let texto = '';
    switch (requiereHotel) {
      case '0':
        texto = 'No';
        break;
        case '1':
          texto = 'Si';
          break;

    }
    return texto;
  }

  getNombreTaller(tallerA, tallerB, tallerC) {
    let texto = '';
    if (tallerA === '1') {
      this.asistente.tallerA = 1;
      this.asistente.tallerB = 0;
      this.asistente.tallerC = 0;
      texto = 'Walmart';
    }
    if (tallerB === '1') {
      this.asistente.tallerB = 1;
      this.asistente.tallerA = 0;
      this.asistente.tallerC = 0;
      texto = 'Linkedin';
    }
    if (tallerC === '1') {
      this.asistente.tallerC = 1;
      this.asistente.tallerA = 0;
      this.asistente.tallerB = 0;
      texto = 'IDEO U';
    }
    return texto;
  }
  getNombreTallerAcompanante(taller) {
    let texto = 'No';
    if (taller === '1') {
      texto = 'Si';
    }
    return texto;
  }


  enviarCorreoConfirmacion() {
    
    this.http.enviarCorreoConfirmacion(this.asistente).subscribe((data) => {
      console.log(data);
      if (data['respuesta'] === 1) {
        this.guardado = false;
        this.correoEnviado = true;
        window.scroll(0, 0);
    
      }
    });
  }


}
