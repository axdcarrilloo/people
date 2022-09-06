import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteDto } from 'src/app/model/cliente-dto';
import { ClienteConsultarDto } from 'src/app/model/clienteConsultar';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.component.html',
  styleUrls: ['./buscar-cliente.component.scss']
})
export class BuscarClienteComponent implements OnInit {

  title = 'peoplefront';
  clienteForm: FormGroup;
  activarBotonBuscar = true;
  classBtnBuscar = "btn btn-primary btn-disabled";
  clienteMain: ClienteDto = new ClienteDto("", "", "", "", "", "", "");

  constructor(private fb: FormBuilder, private clienteSvc: ClienteServiceService, private route: Router) {
    this.clienteForm = this.buildForm();
  }

  ngOnInit(): void {
  }

  verCliente(cliente: ClienteConsultarDto): void {
    this.clienteSvc.consultar(cliente).subscribe((response: any) =>{
      this.clienteMain = response.response;
      this.route.navigate(['/consultar-cliente', this.clienteMain]);
    })
  }

  validarBotonBuscar(): void {
    const tipoDocumento = this.clienteForm.value.tipoDocumento.length;
    const numeroDocumento = this.clienteForm.value.numeroDocumento.length;
    if(tipoDocumento >= 1 && numeroDocumento >= 8 && numeroDocumento <= 11) {
      this.activarBotonBuscar = false;
      this.classBtnBuscar = "btn btn-primary";
    } else {
      this.activarBotonBuscar = true;
      this.classBtnBuscar = "btn btn-primary btn-disabled";
    }
  }

  buscar(event: Event): void{
    event.preventDefault();
    if (this.clienteForm.valid) {
      this.verCliente(this.clienteForm.value);
    }else{
      this.clienteForm.markAllAsTouched();
    }
  }

  buildForm(): FormGroup{
    return this.fb.group({
      tipoDocumento: ['',  [Validators.required]],
      numeroDocumento: ['',  [Validators.required]]
    });
  }

}
