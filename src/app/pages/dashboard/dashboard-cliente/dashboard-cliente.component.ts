import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteEventoDto } from 'src/app/models/cliente/cliente-evento/cliente-evento-dto';
import { ClienteEventoService } from 'src/app/services/cliente-evento/cliente-evento.service';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.scss']
})
export class DashboardClienteComponent implements OnInit{

  eventos: ClienteEventoDto[];
  @Input() IdCliente: number;

  constructor(private clienteEveto: ClienteEventoService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.pesquisarEventos();
    console.log('Dashboard:IdCliente:', this.IdCliente);
  }

  pesquisarEventos(){
    this.clienteEveto.listarEventos(this.IdCliente)
    .subscribe(dados => {
     console.log(dados);
      this.eventos = dados;
    });
  }

  visualizar(){
    this.router.navigate(['eventos/visualizar']);
  }

  mostrarTodos(){
    this.router.navigate(['/eventos/meus-eventos']);
  }

  checkIn(idEvento: number) {
    this.router.navigate(['/checkin'], { queryParams: { IdCliente: this.IdCliente, IdEvento: idEvento } });
  }

  avaliar(){
    this.router.navigate(['/eventos/meus-eventos']);
  }

}
