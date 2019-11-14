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
  taller3 = 0;

  totalRegistrados = 4;
  totalAsistentes = 2;
  totalRegistro = 0;

  title = 'Talleres';
  type = 'PieChart';

  dataGraph = [
    ['Walmart: ' + this.taller1, 3],
    ['Linkedin: ' + this.taller2, 4],
    ['Ideo U: ' + this.taller3, 4]
 ];
 columnNames = ['Browser', 'Percentage'];
 options = {
 };
 width = 600;
 height = 400;

 myOptions = {
  colors: ['#20b3d6', '#93d08e', '#e4e35b'],
  is3D: true
};
 myOptionsAsistente = {
  colors: ['#1db2d9', '#e4e45b'],
  is3D: true,
  animation: {
    duration: 10000,
    easing: 'out',
  }
};

 titleGraph2 = 'Asistentes ';
 typeGraph2 = 'PieChart';
 dataGraph2 = [
   ['Asistentes', 3 ],
   ['Registrados', 4],

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
    
  }
  obtenerCuentaParticipantes() {
    this.http.obtenerCuentaParticipantes().subscribe((data) => {
      console.log(data);

      this.totalRegistro = data['total'];

      
      // tslint:disable-next-line:radix
      const totalRegistrados = parseInt(data['registados']);
      this.totalRegistrados = data['registados'];
      // tslint:disable-next-line:radix
      const totalAsistentes = parseInt(data['asistentes']);
      this.totalAsistentes = data['asistentes'];
      console.log(this.totalRegistrados);
      this.loadDataGraph2(totalAsistentes, totalRegistrados );
    });
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
      const taller3 = parseInt(data['taller3']);
      this.taller3 = data['taller3'];
      this.loadDataGraph1(taller1, taller2, taller3 );
    });
  }
  loadDataGraph1(taller1: number, taller2: number, taller3: number) {
    this.dataGraph = [
      ['Walmart', taller1],
      ['Linkedin', taller2],
      ['Ideo U', taller3]
   ];
  }



  loadDataGraph2(asistentes: number, registrados: number) {
    console.log(registrados);
    this.dataGraph2 = [
      ['Asistentes', asistentes ],
      ['Registrados:', registrados]
   ];
  }
  cargarCliente() {
    console.log(this.sessionS.usuario);
    if (this.sessionS.usuario.name === undefined) {
      console.log('entro');
      this.obtenerAsistencia();
      this.obtenerCuentaParticipantes();
      // this.obtenerCuentaParticipantes();
      // this.router.navigate(['login']);
    } else {
      console.log(this.sessionS.usuario.id);
      console.log('Entro a else');

      this.user = this.sessionS.usuario;
      this.obtenerAsistencia();
      this.obtenerCuentaParticipantes();
    }
  }
}
