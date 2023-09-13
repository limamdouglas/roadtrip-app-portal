import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-listagem',
  templateUrl: './eventos-listagem.component.html',
  styleUrls: ['./eventos-listagem.component.scss']
})
export class EventosListagemComponent {

  constructor(private router: Router) {
    // O loginForm não é inicializado no construtor
  }
  
  visualizar(){
    this.router.navigate(['/eventos/visualizar-adm']);
  }
}
