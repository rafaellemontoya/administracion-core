import { Component, OnInit } from '@angular/core';
import { GoogleChartComponent } from 'angular-google-charts';
import { GuardarInfoService } from '../../services/guardar-info.service';
import { User } from 'src/app/interfaces/user.interface';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  user: User;
  taller1 = 0;
  taller2 = 0;

  title = 'Talleres';
  type = 'PieChart';

  dataGraph = [
    ['Mediación de conflictos urbanos: ' + this.taller1, 3],
    ['Regeneración del espacio público: ' + this.taller2, 4]
 ];
 columnNames = ['Browser', 'Percentage'];
 options = {
 };
 width = 600;
 height = 400;

 titleGraph2 = 'Asistentes ';
 typeGraph2 = 'BarChart';
 dataGraph2 = [
   ['Asistentes', 0 ],
   ['Registrados', 0],

];

columnNamesGraph2 = ['Browser', 'Personas'];
optionsGraph2 = {
};
widthGraph2 = 600;
heightGraph2 = 400;
  constructor(private http: GuardarInfoService, private sessionS: SessionService, private router: Router) { }

  ngOnInit() {
    this.cargarCliente();
    // this.obtenerAsistencia();
    // this.obtenerAsistenciaGraph2();
  }
  obtenerAsistencia() {
    this.http.obtenerCuentaTalleres().subscribe((data) => {
      console.log(data);

      // tslint:disable-next-line:radix
      const taller1 = parseInt(data['taller1']);
      this.taller1 = data['taller1'];
      // tslint:disable-next-line:radix
      const taller2 = parseInt(data['taller2']);
      this.taller2 = data['taller2'];
      this.loadDataGraph1(taller1, taller2 );
    });
  }
  loadDataGraph1(taller1: number, taller2: number) {
    this.dataGraph = [
      ['Mediación de conflictos urbanos', taller1],
      ['Regeneración del espacio público', taller2]
   ];
  }


  obtenerAsistenciaGraph2() {
    this.http.obtenerTiposAsistentes().subscribe((data) => {
      console.log(data);

      let asistentes = parseInt(data['asistentes']);
      // tslint:disable-next-line:radix
      let staff = parseInt(data['staff']);
      let speaker = parseInt(data['speaker']);
      let invitado = parseInt(data['invitado']);
      let prensa = parseInt(data['prensa']);
      
      this.loadDataGraph2(asistentes, staff, speaker, invitado, prensa );
    });
  }
  loadDataGraph2(asistentes: number, staff: number, speaker: number, invitado: number, prensa: number) {
    this.dataGraph2 = [
      ['Asistentes', asistentes ],
      ['Staff COP', staff],
      ['Speaker', speaker],
      ['Invitado esp', invitado],
      ['Prensa', prensa],
   ];
  }
  cargarCliente() {
    console.log(this.sessionS.usuario);
    if (this.sessionS.usuario.name === undefined) {
      console.log('entro');
      this.obtenerAsistencia();
      this.router.navigate(['inicio']);
    } else {
      console.log(this.sessionS.usuario.id);
      console.log('Entro a else');

      this.user = this.sessionS.usuario;
      this.obtenerAsistencia();
    }
  }
}
