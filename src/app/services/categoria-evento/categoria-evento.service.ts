import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CategoriaEventoDto } from 'src/app/models/categoria-evento/categoria-evento-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoriaEventoService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  listarCategoriaEventos(){
    return this.http.get<CategoriaEventoDto[]>(`${this.url}/CategoriaEvento/ListarCategoriaEventos`)
    .pipe(map(data => {
      return data;
    }));
  }
}
