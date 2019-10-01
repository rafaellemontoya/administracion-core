import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Asistente } from '../interfaces/asistente.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class GuardarInfoService {

  constructor(private http: HttpClient) { }

nuevoParticipante(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/frankie/funcionesfrankie.php', asistente);
}

obtenerParticipantes() {

  const request = 'Hola';
  return this.http.post('https://www.registro-eventos.com/core/2019/backend/buscarInfo.php', request );
}
getInfo(): Observable<any[]> {
  return this.http.get<any>('https://www.registro-eventos.com/core/2019/backend/buscarInfo.php')
      ;
}
obtenerParticipante(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/frankie/obtenerInfoAsistente.php', asistente);
}
editarParticipante(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/frankie/EditarAsistente.php', asistente);
}
generarPDF(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/frankie/imprimirIOS.php', asistente);
}
imprimirParticipante(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/impresion-ok/example-1-submitting-a-printjob.php', asistente);
}
obtenerCuentaTalleres() {

  return this.http.get<any>('../../assets/backend/obtener_cupo.php');
}
obtenerTiposAsistentes() {

  return this.http.get<any>('https://www.themyt.com/frankie/tipos-asistentes-dashboard.php');
}

obtenerLote(id: Asistente) {

  return this.http.post('https://www.themyt.com/frankie/obtenerLote.php', id);
}
imprimirLote(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/impresion-ok/example-1-submitting-a-printjob.php', asistente);
}
login(user: User) {
  return this.http.post('https://www.registro-eventos.com/core/2019/backend/login.php', user );
}
}
