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

  return this.http.post('https://www.kforum2020.com/backend/insertar_sistema_admin.php', asistente);
}

obtenerParticipantes() {

  const request = 'Hola';
  return this.http.post('https://www.kforum2020.com/backend/obtener_todos_participantes.php', request );
}

obtenerAcompanantes() {

  const request = 'Hola';
  return this.http.post('https://www.kforum2020.com/backend/obtener_todos_acompanantes.php', request );
}
getInfo(): Observable<any[]> {
  return this.http.get<any>('https://www.kforum2020.com/backend/obtener_todos_participantes.php')
      ;
}
obtenerParticipante(asistente: Asistente) {

  return this.http.post('https://www.kforum2020.com/backend/obtener_participante_post.php', asistente);
}
editarParticipante(asistente: Asistente) {

  return this.http.post('https://www.kforum2020.com/backend/editar_participante_admin.php', asistente);
}
generarPDF(asistente: Asistente) {

  return this.http.post('https://www.kforum2020.com/backend/generarPDF_ipad.php', asistente);
}
imprimirParticipante(asistente: Asistente) {

  return this.http.post('https://www.kforum2020.com/backend/imprimir_printnode.php', asistente);
}
obtenerCuentaTalleres() {

  return this.http.get<any>('https://www.kforum2020.com/backend/obtener_cupo_talleres.php');
}
obtenerCuentaParticipantes() {

  return this.http.get<any>('https://www.kforum2020.com/backend/obtener_cuenta_participantes.php');
}
obtenerTiposAsistentes() {

  return this.http.get<any>('https://www.themyt.com/frankie/tipos-asistentes-dashboard.php');
}

eliminarAsistente(id: Asistente) {

  return this.http.post('https://www.kforum2020.com/backend/eliminar_asistente.php', id);
}
imprimirLote(asistente: Asistente) {

  return this.http.post('https://www.themyt.com/impresion-ok/example-1-submitting-a-printjob.php', asistente);
}
login(user: User) {
  return this.http.post('https://www.kforum2020.com/backend/login.php', user );
}
enviarCorreoConfirmacion(asistente: Asistente) {
  return this.http.post('https://www.kforum2020.com/backend/enviar_correo_edicion.php', asistente );
}
}
