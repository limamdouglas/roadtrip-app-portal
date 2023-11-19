import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { StaffEventoDto } from 'src/app/models/staff-evento/staff-evento-dto';
import { StaffCadastroDto } from 'src/app/models/staff/staff-cadastro-dto';
import { StaffDto } from 'src/app/models/staff/staff-dto';
@Injectable({
  providedIn: 'root'
})
export class StaffService {

  url = "https://localhost:7211"
  constructor(private http: HttpClient) { }
  salvar(dto: StaffCadastroDto){
    console.log(dto);
    return this.http.post(`${this.url}/Funcionario/AddFuncionario`,dto)
    .pipe(map(data => {
      return data;
    }));
  }

  listarStaff(){
    return this.http.get<StaffDto[]>(`${this.url}/Funcionario/ListarFuncionarios`)
    .pipe(map(data => {
      return data;
    }));
  }

  listarStaffPorEvento(idEvento: number){
    return this.http.get<StaffEventoDto>(`${this.url}/EventoFuncionario/ListarEventosFuncionarios/${idEvento}`)
    .pipe(map(data => {
      return data;
    }));
  }
}
