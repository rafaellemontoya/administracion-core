import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { BuscarRegistroComponent } from './pages/buscar-registro/buscar-registro.component';
import { EditarRegistroComponent } from './pages/editar-registro/editar-registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { AcompanantesComponent } from './pages/acompanantes/acompanantes.component';
import { NuevoAcompananteComponent } from './pages/nuevo-acompanante/nuevo-acompanante.component';
import { EncuestaComponent } from './pages/encuesta/encuesta.component';
import { EnvioEncuestaComponent } from './pages/envio-encuesta/envio-encuesta.component';

const routes: Routes = [
  {path: 'nuevo-registro', component: NuevoRegistroComponent},
  {path: 'buscar-registro', component: BuscarRegistroComponent},
  {path: 'acompanantes', component: AcompanantesComponent},
  {path: 'nuevo-acompanante', component: NuevoAcompananteComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'editar-registro/:id', component: EditarRegistroComponent},
  {path: 'envio-encuesta', component: EnvioEncuestaComponent},
  {path: 'encuesta', component: EncuestaComponent},
  {path: '', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
