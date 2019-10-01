import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NuevoRegistroComponent } from './pages/nuevo-registro/nuevo-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscarRegistroComponent } from './pages/buscar-registro/buscar-registro.component';
import { FiltroNombrePipe } from './pipes/nombre-filter.pipe';
import { FiltroApellidoPaternoPipe } from './pipes/apellidoPaterno-filter.pipe';
import { FiltroIdPipe } from './pipes/id-filter.pipe';
import { FiltroPedidoPipe } from './pipes/pedido-filter';
import { FiltroEmpresaPipe } from './pipes/empresa-filter.pipe';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EditarRegistroComponent } from './pages/editar-registro/editar-registro.component';
import { RouterModule, Routes } from '@angular/router';
import { GoogleChartsModule } from 'angular-google-charts';
import { ImpresionLotesComponent } from './pages/impresion-lotes/impresion-lotes.component';
import { FiltroTipoPipe } from './pipes/tipo-filter.pipi';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NuevoRegistroComponent,
    BuscarRegistroComponent,
    FiltroNombrePipe,
    FiltroApellidoPaternoPipe,
    FiltroIdPipe,
    FiltroPedidoPipe,
    FiltroEmpresaPipe,
    FiltroTipoPipe,
    InicioComponent,
    EditarRegistroComponent,
    ImpresionLotesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleChartsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
