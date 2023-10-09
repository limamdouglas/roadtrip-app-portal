import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-pedidos-listagem',
  templateUrl: './pedidos-listagem.component.html',
  styleUrls: ['./pedidos-listagem.component.scss']
})
export class PedidosListagemComponent implements OnInit{

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    ) {
    }

  ngOnInit() {

  }

  cadastarPedido(){
    this.router.navigate(['/pedidos/cadastrar']);
  }
}
