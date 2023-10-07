import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { MesesDto } from 'src/app/models/shared/mes-dto/meses-dto';

@Injectable({
  providedIn: 'root'
})
export class MesService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  getMeses(){
    return this.http.get<MesesDto[]>(`${this.url}/Mes/ListarMeses`)
    .pipe(map(data => {
      return data;
    }));
  }
}
