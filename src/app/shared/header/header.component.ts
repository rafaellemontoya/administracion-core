import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggin = true;
  constructor(private sessionS: SessionService) { }

  ngOnInit() {
    this.cargarCliente();
  }
  cargarCliente() {
    console.log(this.sessionS.usuario);
    if (this.sessionS.usuario.name === undefined) {
      console.log('entro');
      this.loggin = false;

    } else {
      console.log(this.sessionS.usuario.id);
      console.log('Entro a else');

      this.loggin = true;
    }
  }
}
