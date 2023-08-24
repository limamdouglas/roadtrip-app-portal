import { FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credito-listar',
  templateUrl: './credito-listar.component.html',
  styleUrls: ['./credito-listar.component.scss']
})
export class CreditoListarComponent {

  constructor(private FormBuilder: FormBuilder,
    private router: Router) {
    // O loginForm não é inicializado no construtor
  }

  cadastarCredito(){
    this.router.navigate(['sac/credito-cadastrar']);
  }
}
