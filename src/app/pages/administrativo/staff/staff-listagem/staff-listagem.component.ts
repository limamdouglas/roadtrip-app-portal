import { CategoriaEventoService } from './../../../../services/categoria-evento/categoria-evento.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EstadosService } from 'src/app/shared/services/estados/estados.service';
import { EstadosDto } from 'src/app/models/shared/estados-dto/estados-dto';
import { CepService } from 'src/app/shared/services/cep/cep.service';
import { Observable } from 'rxjs';
import { CategoriaEventoDto } from 'src/app/models/categoria-evento/categoria-evento-dto';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { EventoService } from 'src/app/services/evento/evento.service';
import { StaffDto } from 'src/app/models/staff/staff-dto';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-staff-listagem',
  templateUrl: './staff-listagem.component.html',
  styleUrls: ['./staff-listagem.component.scss']
})
export class StaffListagemComponent implements OnInit{
  formulario: FormGroup;
  staff: StaffDto[];

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private staffSvc: StaffService) {
    }

  ngOnInit() {
    this.criarFormulario();
    this.pesquisarStaff();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null],
      cargo: [null],
    });
  }

  cadastarColaborador(){
    this.router.navigate(['/staff/cadastar']);
  }

  mostrarEscala(){
    this.router.navigate(['/escala/listar']);
  }

  limparFiltro(){
    this.formulario.reset();
  }

  pesquisarStaff(){
     this.staffSvc.listarStaff()
       .subscribe(dados => {
        console.log(dados);
         this.staff = dados;
       });
  }

  editar(staff: StaffDto){

  }
}
