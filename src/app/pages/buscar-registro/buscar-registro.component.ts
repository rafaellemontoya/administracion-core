import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Asistente } from '../../interfaces/asistente.interface';
import { GuardarInfoService } from '../../services/guardar-info.service';
import { SessionService } from '../../services/session.service';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscar-registro',
  templateUrl: './buscar-registro.component.html',
  styleUrls: ['./buscar-registro.component.css']
})
export class BuscarRegistroComponent implements OnInit {


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


  constructor(private http: GuardarInfoService,  private sessionS: SessionService, private router: Router ) {
    this.cargarCliente();
   }

  ngOnInit() {

  }

  getInfo() {
    this.http.obtenerParticipantes().subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line:no-string-literal
      // this.items = data;
      this.usersJson = Array.of(data);
      console.log (this.usersJson);
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
  getTaller(taller: string) {
    let texto = '-';
    if (taller === '1') {
      texto = 'Mediación de conflictos urbanos';
    } else if (taller === '2') {
      texto = 'Regeneración del espacio público';
    }
    return texto;
  }

  cargarCliente() {
    console.log(this.sessionS.usuario);
    if (this.sessionS.usuario.name === undefined) {
      console.log('entro');
      this.getInfo();
      //this.router.navigate(['inicio']);
    } else {
      console.log(this.sessionS.usuario.id);
      console.log('Entro a else');

      this.user = this.sessionS.usuario;
      this.getInfo();
    }
  }


}
