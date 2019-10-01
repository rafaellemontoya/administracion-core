import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SessionService {


  usuario: User;
  constructor() {
    this.usuario = new User();
   }

   setCurrentUser(id: number, email: string, nombre: string) {
    this.usuario.id = id;
    this.usuario.name = nombre;
    this.usuario.email = email;
  }
}
