import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  url = "https://localhost:7211"
  constructor(private http: HttpClient) { }

  salvar(dto: any){
    console.log(dto);
    return this.http.post(`${this.url}/EventoCliente/SalvarEventoCliente`,dto)
    .pipe(map(data => {
      return data;
    }));
  }
}
