import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { PontoEmbarqueDto } from 'src/app/models/ponto-embarque/ponto-embarque-dto';

@Injectable({
  providedIn: 'root'
})
export class PontoEmbarqueService {

  url = "https://localhost:7211"

  constructor(private http: HttpClient) { }

  listarPontoEmbarques(){
    return this.http.get<PontoEmbarqueDto[]>(`${this.url}/PontoEmbarque/ListarPontoEmbarques`)
    .pipe(map(data => {
      return data;
    }));
  }
}
