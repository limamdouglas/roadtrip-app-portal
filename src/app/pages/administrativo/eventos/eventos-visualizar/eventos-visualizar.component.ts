import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { HttpClient } from '@angular/common/http';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-eventos-visualizar',
  templateUrl: './eventos-visualizar.component.html',
  styleUrls: ['./eventos-visualizar.component.scss']
})
export class EventosVisualizarComponent implements OnInit{

  eventoDto: EventoDto;
  pontosEmbarque: any[];
  quantidadeTotal: number;
  quantidadeVendida: number;
  quantidadeRestante: number;
  staff: any[];
  clientes: any[];

  constructor(private Router: Router,
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private eventoSvc: EventoService) {
      this.eventoDto = this.eventoSvc.getEvento();
      this.quantidadeTotal = this.eventoDto.qtdVagas;
      this.quantidadeVendida = this.eventoDto.qtdVagas - this.eventoDto.qtdVagasDisponiveis;
      this.quantidadeRestante = this.eventoDto.qtdVagasDisponiveis;
      this.pontosEmbarque = this.eventoDto.pontoEmbarque;
      this.staff = this.eventoDto.staff;
      this.clientes = this.eventoDto.cliente;
    }


  ngOnInit() {
  }
}
