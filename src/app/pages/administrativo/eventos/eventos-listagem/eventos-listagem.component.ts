import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadosService } from 'src/app/shared/services/estados/estados.service';
import { EstadosDto } from 'src/app/models/shared/estados-dto/estados-dto';
import { CepService } from 'src/app/shared/services/cep/cep.service';

@Component({
  selector: 'app-eventos-listagem',
  templateUrl: './eventos-listagem.component.html',
  styleUrls: ['./eventos-listagem.component.scss']
})
export class EventosListagemComponent implements OnInit{

  formulario: FormGroup;
  estados: EstadosDto[];
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private estadosSvc: EstadosService,
              private cepSvc: CepService) {
  }

  ngOnInit() {
    this.criarFormulario();

    this.estadosSvc.getEstadosBr()
      .subscribe(dados => {
        this.estados = dados;
        console.log(dados);
      });
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      cep: [null, Validators.required],
      endereco: [null],
      estado: [null]
    });
  }

  pesquisarEvento(){
  }

  visualizar(){
    this.router.navigate(['/eventos/visualizar-adm']);
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
}
