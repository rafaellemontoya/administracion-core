import { Component, OnInit } from '@angular/core';
import { GuardarInfoService } from 'src/app/services/guardar-info.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private http: GuardarInfoService, private session: SessionService, private router: Router) { }

  ngOnInit() {
  }
  iniciarSesion() {
    console.log(this.email + '->' + this.password);
    const user: User = new User();
    user.email = this.email;
    user.password = this.password;

    this.http.login(user).subscribe((data) => {
      console.log(data);
      if (data['respuesta'] === 1) {
        this.session.setCurrentUser(data['id'].valueOf(), data['email'], data['nombre']);
        this.router.navigate(['inicio']);
      }
      // tslint:disable-next-line:no-string-literal
      // this.items = data;

    });
  }
  atras() {
    
  }
}
