import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteCadastroDto } from 'src/app/models/cliente/cliente-cadastro-dto';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.scss']
})
export class ClientesCadastroComponent implements OnInit{

  formulario: FormGroup;
  clienteDto: ClienteCadastroDto;

  constructor(private formBuilder: FormBuilder,
    private clienteSvc: ClienteService,
    private router: Router){}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, [Validators.required]],
      cpf: [null, Validators.required],
      rg: [null, Validators.required],
      orgaoEmissor: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      telefone: [null, Validators.required],
      regiao: [null, Validators.required]
    });
  }

  salvarEvento(){
    this.clienteDto = this.formulario.value
    this.clienteSvc.salvar(this.clienteDto)
      .pipe()
      .subscribe((data) => {
        this.router.navigate(['/clientes/listar']);
      })
  }

  voltar(){
    this.router.navigate(['/clientes/listar']);
  }

  limpar(){
    this.formulario.reset();
  }

}
