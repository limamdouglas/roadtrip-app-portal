import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { EventoService } from 'src/app/services/evento/evento.service';
import { PedidoService } from 'src/app/services/pedidos/pedido.service';
import Swal from 'sweetalert2';

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
    private router: Router,
    private spinner: NgxSpinnerService) { }

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

    let value = this.formulario.get('cpf').value;

    value = value.replace(/[.-]/g, '');

    if (/^\d{11}$/.test(value)) {
      this.spinner.show();
      this.clienteSvc.buscarCliente(value)
        .pipe(
          finalize(() => this.spinner.hide())
        )
        .subscribe(dados => {
          if (dados) {
            this.formulario.get('quantidade').enable();
            this.formulario.get('ehReserva').enable();
            this.formulario.get('evento').enable();
            this.listarEventos();

            this.formulario.patchValue({
              nome: dados.nome,
              clienteId: dados.id
            });



          } else {
            Swal.fire({
              title: 'Esse cpf não está cadastrado no sistema. Deseja cadastrar?',
              showCancelButton: true,
              confirmButtonText: 'Sim',
              cancelButtonText: 'Não',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/clientes/cadastrar']);
              }
            })

          }



        });

    } else {
      this.formulario.get('nome').disable();
      this.formulario.get('quantidade').disable();
      this.formulario.get('ehReserva').disable();
      this.formulario.get('evento').disable();
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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Pedido cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/pedidos/listar']);
      })
  }

  voltar() {

  }

  limpar() {

  }

}
