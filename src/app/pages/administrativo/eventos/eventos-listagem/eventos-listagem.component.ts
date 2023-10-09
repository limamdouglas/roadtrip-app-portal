import { CategoriaEventoService } from './../../../../services/categoria-evento/categoria-evento.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadosService } from 'src/app/shared/services/estados/estados.service';
import { EstadosDto } from 'src/app/models/shared/estados-dto/estados-dto';
import { CepService } from 'src/app/shared/services/cep/cep.service';
import { Observable } from 'rxjs';
import { CategoriaEventoDto } from 'src/app/models/categoria-evento/categoria-evento-dto';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { EventoService } from 'src/app/services/evento/evento.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-eventos-listagem',
  templateUrl: './eventos-listagem.component.html',
  styleUrls: ['./eventos-listagem.component.scss']
})
export class EventosListagemComponent implements OnInit{

  formulario: FormGroup;
  estados: Observable<EstadosDto[]>;
  categorias: CategoriaEventoDto[];
  eventos: EventoDto[];

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private estadosSvc: EstadosService,
              private cepSvc: CepService,
              private categoriaSvc: CategoriaEventoService,
              private eventoSvc: EventoService,
             ) {
  }

  ngOnInit() {
    this.criarFormulario();

    this.listarCategorias();
    this.pesquisarEvento();
    // this.estados = this.estadosSvc.getEstadosBr();

  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      evento: [null, Validators.required],
      dataEvento: [null, [Validators.required, Validators.email]],
      categoria: [null, Validators.required]
    });
  }

  pesquisarEvento(){
    this.eventoSvc.listarEventos()
      .subscribe(dados => {
        this.eventos = dados;
      });
  }

  visualizar(evento: EventoDto){
    this.eventoSvc.setEvento(evento)
    this.router.navigate(['/eventos/visualizar']);
  }

  editar(evento: EventoDto){
    this.eventoSvc.setEvento(evento)
    this.router.navigate(['/eventos/editar']);
  }

  cadastarEvento(){
    this.router.navigate(['/eventos/cadastar']);
  }

  limparFiltro(){
    this.formulario.reset();
  }

  consultaCEP(){
    let cep = this.formulario.get('cep').value;

    if(cep !== "" && cep != null){
      this.cepSvc.consultaCEP(cep)
        .subscribe(dados => this.populaEndereco(dados));
    }
  }

  populaEndereco(dados){
    this.formulario.patchValue({
      endereco: dados.logradouro
    });
  }

  listarCategorias(){
    this.categoriaSvc.listarCategoriaEventos()
      .subscribe(dados => {
        this.categorias = dados;
      });
  }
}
