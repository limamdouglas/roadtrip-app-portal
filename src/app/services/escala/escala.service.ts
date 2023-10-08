import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EscalaDto } from 'src/app/models/escala/escala-dto';
import { StaffEventoDto } from 'src/app/models/staff-evento/staff-evento-dto';

@Injectable({
  providedIn: 'root'
})
export class EscalaService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  salvar(dto: StaffEventoDto){
    console.log(dto);
    return this.http.post(`${this.url}/EventoFuncionario/AddEventoFuncionario`,dto)
    .pipe(map(data => {
      return data;
    }));
  }

  listarEscala(){
    return this.http.get<EscalaDto[]>(`${this.url}/EventoFuncionario/ListarEventosFuncionarios`)
    .pipe(map(data => {
      return data;
    }));
  }
}
