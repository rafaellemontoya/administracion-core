import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { GuardarInfoService } from 'src/app/services/guardar-info.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { Asistente } from 'src/app/interfaces/asistente.interface';


@Component({
  selector: 'app-envio-encuesta',
  templateUrl: './envio-encuesta.component.html',
  styleUrls: ['./envio-encuesta.component.css']
})
export class EnvioEncuestaComponent implements OnInit {



 

  items: any[];
  usersJson: any[];
  terminoBusquedaNombre: string;
  terminoBusquedaApellido: string;
  terminoBusquedaId: string;
  terminoBusquedaPedido: string;
  terminoBusquedaEmpresa: string;
  terminoBusquedaTipo: string;
  imprimiendo = false;
  user: User;

  preguntaEliminar = false;
  estadoEliminado = false;
  idEliminar = '';
  nombreEliminar = '';

  estadoImprimiendo = false;


  constructor(private http: GuardarInfoService,  private sessionS: SessionService, private router: Router ) {
   this.cargarCliente();
   }

  ngOnInit() {
    // this.getInfo();
  }

  getInfo() {
    this.http.obtenerEnvioEcuesta().subscribe((data) => {

      // tslint:disable-next-line:no-string-literal
      // this.items = data;
      this.usersJson = Array.of(data);

    });
  }
  getClaseTipoAsistente(numeroGafetes: string) {
    let clase = '';
    if (numeroGafetes === '0') {

    } else {
      clase = 'asistente';
    }
    return clase;
  }
  getNombreTaller(tallerA, tallerB, tallerC) {
    let texto = '';
    if (tallerA === '1') {
      texto = 'Walmart';
    }
    if (tallerB === '1') {
      texto = 'Linkedin';
    }
    if (tallerC === '1') {
      texto = 'Ideo U';
    }
    return texto;
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

  cargarCliente() {

    if (this.sessionS.usuario.name === undefined) {

      this.getInfo();
      this.router.navigate(['login']);
    } else {



      this.user = this.sessionS.usuario;
      this.getInfo();
    }
  }

  preguntarEliminar(id, nombre) {

    window.scroll(0, 0);
    this.preguntaEliminar = true;
    this.idEliminar = id;
    console.log(this.idEliminar);
    this.nombreEliminar = nombre;

  }
  eliminar() {
    this.preguntaEliminar = false;
    const asistente = new Asistente();
    asistente.id = this.idEliminar;
    this.http.eliminarAsistente(asistente).subscribe((data) => {
      console.log(data);
      if (data['respuesta'] === 1) {
        this.getInfo();
        this.estadoEliminado = true;

        window.scroll(0, 0);
    
      }
      // tslint:disable-next-line:no-string-literal
      // this.items = data;
      this.usersJson = Array.of(data);
      console.log (this.usersJson);
    });

  }
  getTextoEnvio(estado: string) {
    let texto = 'No';
    if(estado === '1'){
      texto = 'Sí';
    }
    return texto;
  }

  descargarExcel() {
    
  }

}
