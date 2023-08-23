import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-administrativo',
  templateUrl: './menu-administrativo.component.html',
  styleUrls: ['./menu-administrativo.component.scss']
})
export class MenuAdministrativoComponent {
  constructor(private router: Router) {
    // O loginForm não é inicializado no construtor
  }
  sair(){
    this.router.navigate(['']);
  }
}
