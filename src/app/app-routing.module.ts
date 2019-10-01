import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { BuscarRegistroComponent } from './pages/buscar-registro/buscar-registro.component';
import { EditarRegistroComponent } from './pages/editar-registro/editar-registro.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: 'nuevo-registro', component: NuevoRegistroComponent},
  {path: 'buscar-registro', component: BuscarRegistroComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'editar-registro/:id', component: EditarRegistroComponent},
  {path: '', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
