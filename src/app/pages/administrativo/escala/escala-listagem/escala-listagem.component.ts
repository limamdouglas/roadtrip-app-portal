import { EventoService } from 'src/app/services/evento/evento.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MesesDto } from 'src/app/models/shared/mes-dto/meses-dto';
import { EscalaService } from 'src/app/services/escala/escala.service';
import { MesService } from 'src/app/shared/services/mes/mes.service';
import { EscalaDto } from 'src/app/models/escala/escala-dto';

@Component({
  selector: 'app-escala-listagem',
  templateUrl: './escala-listagem.component.html',
  styleUrls: ['./escala-listagem.component.scss']
})
export class EscalaListagemComponent implements OnInit{

  formulario: FormGroup;
  meses: MesesDto[];
  eventos: any[];
  escala: EscalaDto[];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private escalaSvc: EscalaService,
    private mesSvc: MesService,
    private eventoSvc: EventoService) {
  }

  ngOnInit() {
  this.criarFormulario();
  this.listarMeses();
  this.listarEventos();
  this.pesquisarEscala();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      mes: [null, Validators.required],
      evento: [null, Validators.required]
    });
  }

  pesquisarEscala(){
    this.escalaSvc.listarEscala()
    .subscribe(dados => {
      this.escala = dados;
    });
  }

  cadastarEscala(){
    this.router.navigate(['/escala/cadastar']);
  }

  limparFiltro(){

  }

  listarMeses(){
    this.mesSvc.getMeses()
      .subscribe(dados => {
        this.meses = dados;
      });
  }

  listarEventos(){
    this.eventoSvc.listarEventos()
      .subscribe(dados => {
        this.eventos = dados;
      });
  }
}
