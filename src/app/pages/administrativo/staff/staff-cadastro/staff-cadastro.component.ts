import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffCadastroDto } from 'src/app/models/staff/staff-cadastro-dto';
import { StaffDto } from 'src/app/models/staff/staff-dto';
import { EventoService } from 'src/app/services/evento/evento.service';
import { PontoEmbarqueService } from 'src/app/services/ponto-embarque/ponto-embarque.service';
import { StaffService } from 'src/app/services/staff/staff.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-cadastro',
  templateUrl: './staff-cadastro.component.html',
  styleUrls: ['./staff-cadastro.component.scss']
})
export class StaffCadastroComponent implements OnInit{
  formulario: FormGroup;
  staffDto: StaffCadastroDto;

  constructor(private formBuilder: FormBuilder,
    private staffSvc: StaffService,
    private router: Router){}

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      cargoId: [null, [Validators.required]],
      rg: [null, Validators.required],
      orgaoEmissor: [null, Validators.required],
    });
  }

  salvarEvento(){
    this.staffDto = this.formulario.value
    this.staffSvc.salvar(this.staffDto)
       .pipe()
       .subscribe((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Staff cadastrado com sucesso!',
          showConfirmButton: false,
          timer: 1500
        });
         this.router.navigate(['/staff/listar']);
       })

  }

  voltar(){
    this.router.navigate(['/staff/listar']);
  }

  limpar(){
    this.formulario.reset();
  }
}
