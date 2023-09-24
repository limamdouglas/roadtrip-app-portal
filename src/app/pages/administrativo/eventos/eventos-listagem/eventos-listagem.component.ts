import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-listagem',
  templateUrl: './eventos-listagem.component.html',
  styleUrls: ['./eventos-listagem.component.scss']
})
export class EventosListagemComponent implements OnInit{

  formulario: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });
  }

  visualizar(){
    this.router.navigate(['/eventos/visualizar-adm']);
  }

  cadastarEvento(){
    this.router.navigate(['/eventos/cadastar']);
  }

  pesquisarEvento(){

  }

  limparFiltro(){
    
  }
}
