export class ResponseMainDto {

    mensaje: string;
    response: object;

    constructor(mensaje: string, response: object) {
        this.mensaje = mensaje;
        this.response = response;
    }

}