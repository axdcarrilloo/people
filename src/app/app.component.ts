import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'peoplefront';
  clienteForm: FormGroup;
  activarBotonBuscar = true;
  classBtnBuscar = "btn btn-primary btn-disabled";

  constructor(private fb: FormBuilder) {
    this.clienteForm = this.buildForm();
  }

  ngOnInit(): void {}

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
      //this.clienteForm.value.nombreProducto =
        //  this.productService.capitalizeFirstLetter(this.clienteForm.value.nombreProducto);
      console.log(this.clienteForm.value);
      //this.registerProduct(this.clienteForm.value);
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
