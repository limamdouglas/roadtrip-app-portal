import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.scss']
})
export class DashboardClienteComponent {

  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    // O loginForm não é inicializado no construtor
  }

  visualizar(){
    this.router.navigate(['eventos/visualizar']);
  }

  mostrarTodos(){
    this.router.navigate(['/eventos/meus-eventos']);
  }

}
