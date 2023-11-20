import { PontoEmbarqueDto } from './../../models/ponto-embarque/ponto-embarque-dto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Acompanhante } from 'src/app/models/acompanhante/acompanhante';
import { StaffEventoDto } from 'src/app/models/staff-evento/staff-evento-dto';
import { StaffDto } from 'src/app/models/staff/staff-dto';
import { PontoEmbarqueService } from 'src/app/services/ponto-embarque/ponto-embarque.service';
import { StaffService } from 'src/app/services/staff/staff.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})

export class CheckinComponent implements OnInit {

  acompanhantes: Acompanhante[] = [];
  acompanhanteForms: FormGroup[] = [];
  acompanhanteForm: FormGroup;
  staffEvento: StaffEventoDto = new StaffEventoDto;
  staff: StaffDto[];
  pontoEmbarqueEvento: PontoEmbarqueDto[];
  numeroAcompanhantes = 2;
  idCliente: number;
  idEvento: number;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private staffSvc: StaffService,
              private pontoEmbarqueSvc: PontoEmbarqueService) {}

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.idCliente = params['IdCliente'];
      this.idEvento = params['IdEvento'];
    });

    console.log("IdEvento: ", this.idEvento);

    this.staffSvc.listarStaffPorEvento(this.idEvento)
    .subscribe(dados => {
      this.staffEvento = dados;
      this.staff = this.staffEvento.staffEvento;
    });

    this.pontoEmbarqueSvc.listarPontoEmbarquesPorEvento(this.idEvento)
    .subscribe(dados => {
      this.pontoEmbarqueEvento = dados;
    })

     for (let i = 0; i < this.numeroAcompanhantes; i++) {
       const form = this.fb.group({
         id: [`form_${i}`, Validators.required],
         nome: ['', Validators.required],
         cpf: ['', Validators.required],
         telefone: ['', Validators.required],
       });
     }
  }

  onSubmit() {
    for (let i = 0; i < this.acompanhanteForms.length; i++) {
      console.log(this.acompanhanteForms[i].value);
    }
  }
}
