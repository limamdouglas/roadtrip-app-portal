import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  salvar(dto: EventoDto){
    return this.http.post(`${this.url}/Evento/AddEvento`,dto)
    .pipe(map(data => {
      return data;
    }));
  }
}
