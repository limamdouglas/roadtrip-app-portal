import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaEventoDto } from 'src/app/models/categoria-evento/categoria-evento-dto';
import { EventoCadastroDto } from 'src/app/models/eventos/evento/evento-cadastro-dto';
import { PontoEmbarqueDto } from 'src/app/models/ponto-embarque/ponto-embarque-dto';
import { CategoriaEventoService } from 'src/app/services/categoria-evento/categoria-evento.service';
import { EventoService } from 'src/app/services/evento/evento.service';
import { PontoEmbarqueService } from 'src/app/services/ponto-embarque/ponto-embarque.service';

@Component({
  selector: 'app-eventos-cadastro',
  templateUrl: './eventos-cadastro.component.html',
  styleUrls: ['./eventos-cadastro.component.scss']
})
export class EventosCadastroComponent implements OnInit{
  categorias: CategoriaEventoDto[];
  pontoEmbarques: PontoEmbarqueDto[];
  formulario: FormGroup;
  eventoDto: EventoCadastroDto;

  constructor(private formBuilder: FormBuilder,
    private categoriaSvc: CategoriaEventoService,
    private pontoEmbarqueSvc: PontoEmbarqueService,
    private eventoSvc: EventoService,
    private router: Router){}

  ngOnInit() {
    this.criarFormulario();

    this.listarCategorias();
    this.listarPontoEmbarques();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      data: [null, [Validators.required]],
      qtdVagas: [null, Validators.required],
      categoria: [null, Validators.required],
      descricao: [null, Validators.required],
      roteiro: [null, Validators.required],
      preco: [null, Validators.required],
      pontoEmbarque: [null, Validators.required]
    });
  }

  salvarEvento(){
    this.eventoDto = this.formulario.value
    this.eventoSvc.salvar(this.eventoDto)
      .pipe()
      .subscribe((data) => {
        this.router.navigate(['/eventos/listar']);
      })

  }

  voltar(){
    this.router.navigate(['/eventos/listar']);
  }

  limpar(){
    this.formulario.reset();
  }

  listarCategorias(){
    this.categoriaSvc.listarCategoriaEventos()
      .subscribe(dados => {
        this.categorias = dados;
      });
  }

  listarPontoEmbarques(){
    this.pontoEmbarqueSvc.listarPontoEmbarques()
      .subscribe(dados => {
        this.pontoEmbarques = dados;
      });
  }

}
