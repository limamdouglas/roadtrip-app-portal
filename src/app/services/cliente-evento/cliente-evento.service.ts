import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ClienteCadastroDto } from 'src/app/models/cliente/cliente-cadastro-dto';
import { ClienteDto } from 'src/app/models/cliente/cliente-dto';
import { ClienteEventoDto } from 'src/app/models/cliente/cliente-evento/cliente-evento-dto';

@Injectable({
  providedIn: 'root'
})
export class ClienteEventoService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  listarEventos(IdCliente: number){
    return this.http.get<ClienteEventoDto[]>(`${this.url}/EventoCliente/ListarEventosPorCliente/${IdCliente}`)
    .pipe(map(data => {
      return data;
    }));
  }
}
