import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ClienteConsultarDto } from '../model/clienteConsultar';
import { ResponseMainDto } from '../model/responseMainDto';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(private http: HttpClient) { }

  consultar(cliente: ClienteConsultarDto): Observable<ResponseMainDto> {
    const uri = "Consultar/" + cliente.tipoDocumento + "/" + cliente.numeroDocumento;
    return this.http.get<ResponseMainDto>(environment.BASE + uri);
  }

}
