import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicesModule } from './services/services.module';
import { ConsultarClienteComponent } from './componentes/consultar-cliente/consultar-cliente.component';
import { BuscarClienteComponent } from './componentes/buscar-cliente/buscar-cliente.component';

@NgModule({
  declarations: [
    AppComponent, ConsultarClienteComponent, BuscarClienteComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
