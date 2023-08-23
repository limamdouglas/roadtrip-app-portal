import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-clientes',
  templateUrl: './menu-clientes.component.html',
  styleUrls: ['./menu-clientes.component.scss']
})
export class MenuClientesComponent {
  constructor(private router: Router) {
    // O loginForm não é inicializado no construtor
  }
  sair(){
    this.router.navigate(['']);
  }
}
