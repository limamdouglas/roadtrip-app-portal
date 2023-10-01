import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventoCadastroDto } from 'src/app/models/eventos/evento/evento-cadastro-dto';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  salvar(dto: EventoCadastroDto){
    return this.http.post(`${this.url}/Evento/AddEvento`,dto)
    .pipe(map(data => {
      return data;
    }));
  }

  listarEventos(){
    return this.http.get<EventoDto[]>(`${this.url}/Evento/ListarEventos`)
    .pipe(map(data => {
      return data;
    }));
  }
}
