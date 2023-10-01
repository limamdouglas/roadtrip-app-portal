import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EventoCadastroDto } from 'src/app/models/eventos/evento/evento-cadastro-dto';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { StaffCadastroDto } from 'src/app/models/staff/staff-cadastro-dto';
import { StaffDto } from 'src/app/models/staff/staff-dto';
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url = "https://localhost:7211"
  constructor(private http: HttpClient) { }

  salvar(dto: StaffCadastroDto){
    return this.http.post(`${this.url}/Staff/AddStaff`,dto)
    .pipe(map(data => {
      return data;
    }));
  }

  listarStaff(){
    return this.http.get<StaffDto[]>(`${this.url}/Staff/ListarStaff`)
    .pipe(map(data => {
      return data;
    }));
  }
}
