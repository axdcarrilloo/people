import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteDto } from 'src/app/model/cliente-dto';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.scss']
})
export class ConsultarClienteComponent implements OnInit {

  @Input("clienteMain")
  cliente: any = new ClienteDto("", "", "", "", "", "", "");
  clienteForm: FormGroup;
  desabilitarInputs = true;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.cliente = this.route.snapshot.params;
    this.clienteForm = this.buildForm();
  }

  ngOnInit(): void {
  }

  buildForm(): FormGroup{
    return this.fb.group({
      primerNombre: [this.cliente.primerNombre,  []],
      segundoNombre: [this.cliente.segundoNombre,  []],
      primerApellido: [this.cliente.primerApellido,  []],
      segundoApellido: [this.cliente.segundoApellido,  []],
      telefono: [this.cliente.telefono,  []],
      direccion: [this.cliente.direccion,  []],
      ciudadResidencia: [this.cliente.ciudadResidencia,  []],
    });
  }

}
