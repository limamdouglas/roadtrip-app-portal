import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EstadosDto } from 'src/app/models/shared/estados-dto/estados-dto';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  getEstadosBr(){
    return this.http.get<EstadosDto[]>(`${this.url}/EstadosBr/ListarCategoriaEventos`)
    .pipe(map(data => {
      return data;
    }));
  }
}
