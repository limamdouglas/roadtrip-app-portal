import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteDto } from 'src/app/models/cliente/cliente-dto';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-clientes-listagem',
  templateUrl: './clientes-listagem.component.html',
  styleUrls: ['./clientes-listagem.component.scss']
})
export class ClientesListagemComponent implements OnInit{

  formulario: FormGroup;
  clientes: ClienteDto[];

  constructor(private router: Router,
    private clienteSvc: ClienteService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.criarFormulario();
    this.pesquisarCliente();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null]
    });
  }

  cadastarCliente(){
    this.router.navigate(['/clientes/cadastrar']);
  }

  limparFiltro(){

  }

  pesquisarCliente(){
    this.clienteSvc.listarClientes()
    .subscribe(dados => {
     console.log(dados);
      this.clientes = dados;
    });
  }

  editar(dto: ClienteDto){

  }
}
