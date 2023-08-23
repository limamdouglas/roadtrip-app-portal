import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-lsitar',
  templateUrl: './eventos-lsitar.component.html',
  styleUrls: ['./eventos-lsitar.component.scss']
})
export class EventosLsitarComponent {

  constructor(private router: Router) {
    // O loginForm não é inicializado no construtor
  }
  visualizar(){
    this.router.navigate(['/eventos/visualizar-adm']);
  }
}
