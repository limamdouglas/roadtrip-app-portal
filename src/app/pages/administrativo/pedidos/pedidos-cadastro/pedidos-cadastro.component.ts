import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { EventoService } from 'src/app/services/evento/evento.service';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';

@Component({
  selector: 'app-pedidos-cadastro',
  templateUrl: './pedidos-cadastro.component.html',
  styleUrls: ['./pedidos-cadastro.component.scss']
})
export class PedidosCadastroComponent implements OnInit {

  formulario: FormGroup;
  eventos: any[];
  pedidoDto: any;

  constructor(private formBuilder: FormBuilder,
    private eventoSvc: EventoService,
    private clienteSvc: ClienteService,
    private pedidoSvc: PedidoService,
    private router: Router) { }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      cpf: [null, Validators.required],
      nome: [{ value: null, disabled: true }, Validators.required],
      quantidade: [{ value: null, disabled: true }, [Validators.required]],
      ehReserva: [{ value: false, disabled: true }, Validators.required],
      evento: [{ value: null, disabled: true }, Validators.required],
      clienteId: [null]
    });
  }

  verificarCPF() {
    const value = this.formulario.get('cpf').value;
    if (/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(value)) {
      this.clienteSvc.buscarCliente(value)
        .subscribe(dados => {
          console.log(dados);
          if (dados) {
            this.formulario.get('quantidade').enable();
            this.formulario.get('ehReserva').enable();
            this.formulario.get('evento').enable();
            this.listarEventos();

            this.formulario.patchValue({
              nome: dados.nome,
              clienteId: dados.id
            });

          }
        });

    } else {
      this.formulario.get('nome').disable();
      this.formulario.get('quantidade').enable();
      this.formulario.get('ehReserva').enable();
      this.formulario.get('evento').enable();
    }
  }

  listarEventos() {
    this.eventoSvc.listarEventos()
      .subscribe(dados => {
        this.eventos = dados;
      });
  }

  salvarRelacionamentoClienteEvento() {
    this.pedidoDto = this.formulario.value
    this.pedidoSvc.salvar(this.pedidoDto)
       .pipe()
       .subscribe((data) => {
         this.router.navigate(['/pedidos/listar']);
       })
  }

  voltar() {

  }

  limpar() {

  }

}
