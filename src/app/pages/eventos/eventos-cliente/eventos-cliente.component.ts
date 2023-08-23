import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-eventos-cliente',
  templateUrl: './eventos-cliente.component.html',
  styleUrls: ['./eventos-cliente.component.scss']
})
export class EventosClienteComponent {
  constructor(private formBuilder: FormBuilder,
    private router: Router) {
    // O loginForm não é inicializado no construtor
  }
  visualizar(){
    this.router.navigate(['eventos/visualizar']);
  }
}
