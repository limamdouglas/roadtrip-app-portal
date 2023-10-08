import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ClienteCadastroDto } from 'src/app/models/cliente/cliente-cadastro-dto';
import { ClienteDto } from 'src/app/models/cliente/cliente-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  salvar(dto: ClienteCadastroDto){
    console.log(dto);
    return this.http.post(`${this.url}/Cliente/SalvarCliente`,dto)
    .pipe(map(data => {
      return data;
    }));
  }

  listarClientes(){
    return this.http.get<ClienteDto[]>(`${this.url}/Cliente/ListarClientes`)
    .pipe(map(data => {
      return data;
    }));
  }
}
