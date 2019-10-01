import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuardarInfoService } from 'src/app/services/guardar-info.service';
import { Asistente } from '../../interfaces/asistente.interface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.component.html',
  styleUrls: ['./editar-registro.component.css']
})
export class EditarRegistroComponent implements OnInit {

  constructor( private location: Location, private route: ActivatedRoute, private http: GuardarInfoService) { }

  idRecibido = '';
  asistente = new Asistente();
  guardado = false;

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
    if (this.asistente.producto === 'Experiencia IBF 2019 Plus') {
      this.asistente.comida = 1;
    } else {
      this.asistente.comida = 0;
    }
    this.http.editarParticipante(this.asistente).subscribe((data) => {
      console.log(data);
      if (data['respuesta'] === 1) {
        this.guardado = true;
        window.scroll(0, 0);
        this.generarPDF(data['id']);
      }
    });

  }
  generarPDF(id: string) {
    const asistente = new Asistente();
    asistente.id = id;
    this.http.generarPDF(asistente).subscribe((data) => {
      console.log(data);
      this.imprimirPDF(asistente);
    });
  }
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
      this.asistente.apellidoPaterno = data['apellidoPaterno'];
      this.asistente.apellidoMaterno = data['apellidoMaterno'];
      this.asistente.email = data['email'];
      this.asistente.empresa = data['empresa'];
      this.asistente.estado = data['estado'];
      this.asistente.nombre = data['nombre'];
      this.asistente.numeroPedido = data['pedido'];
      this.asistente.producto = data['producto'];
      this.asistente.telefono = data['telefono'];
      this.asistente.tipoAsistente = data['tipoAsistente'];

    });
  }


}
