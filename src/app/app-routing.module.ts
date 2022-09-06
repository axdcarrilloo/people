import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './componentes/buscar-cliente/buscar-cliente.component';
import { ConsultarClienteComponent } from './componentes/consultar-cliente/consultar-cliente.component';

const routes: Routes = [
  { path: 'consultar-cliente', component: ConsultarClienteComponent },
  { path: '', component: BuscarClienteComponent },
  { path: 'buscar-cliente', component: BuscarClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
