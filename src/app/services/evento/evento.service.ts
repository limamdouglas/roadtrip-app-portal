import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventoCadastroDto } from 'src/app/models/eventos/evento/evento-cadastro-dto';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { StaffEventoDto } from 'src/app/models/staff-evento/staff-evento-dto';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url = "https://localhost:7211"

  private evento: EventoDto | null = null;
  setEvento(evento: EventoDto) {
    this.evento = evento;
  }

  getEvento(): EventoDto | null {
    return this.evento;
  }

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

  listarRelacionamentoStaffEventos(eventoId: number){
    return this.http.get<StaffEventoDto>(`${this.url}/EventoFuncionario/ListarEventosFuncionarios/${eventoId}`)
    .pipe(map(data => {
      return data;
    }));
  }
}
