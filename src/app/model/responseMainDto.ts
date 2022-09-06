import { ClienteDto } from "./cliente-dto";

export class ResponseMainDto {

    mensaje: string;
    cliente: ClienteDto;

    constructor(mensaje: string, cliente: ClienteDto) {
        this.mensaje = mensaje;
        this.cliente = cliente;
    }

}