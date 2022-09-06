export class ClienteDto {
    primerNombre: string;
	segundoNombre: string;	
	primerApellido: string ;
	segundoApellido: string ;
	telefono: string ;
	direccion: string ;
	ciudadResidencia: string ;

    constructor (primerNombre: string, segundoNombre: string, primerApellido: string, 
        segundoApellido: string, telefono: string, direccion: string, ciudadResidencia: string) {
            this.primerNombre = primerNombre;
            this.segundoNombre = segundoNombre;
            this.primerApellido = primerApellido;
            this.segundoApellido = segundoApellido;
            this.telefono = telefono;
            this.direccion = direccion;
            this.ciudadResidencia = ciudadResidencia; 
    }
}