import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaEventoDto } from 'src/app/models/categoria-evento/categoria-evento-dto';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { CategoriaEventoService } from 'src/app/services/categoria-evento/categoria-evento.service';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-eventos-cadastro',
  templateUrl: './eventos-cadastro.component.html',
  styleUrls: ['./eventos-cadastro.component.scss']
})
export class EventosCadastroComponent implements OnInit{
  categorias: CategoriaEventoDto[];
  formulario: FormGroup;
  eventoDto: EventoDto;

  constructor(private formBuilder: FormBuilder,
    private categoriaSvc: CategoriaEventoService,
    private eventoSvc: EventoService,
    private router: Router){}

  ngOnInit() {
    this.criarFormulario();

    this.listarCategorias();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      evento: [null, Validators.required],
      dataEvento: [null, [Validators.required]],
      qtdVagas: [null, Validators.required],
      categoria: [null, Validators.required]
    });
  }

  salvarEvento(){
    this.eventoDto = this.formulario.value
    this.eventoSvc.salvar(this.eventoDto)
      .pipe()
      .subscribe((data) => {
        console.log("Evento Cadastrado");
        console.log(data);
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
}
