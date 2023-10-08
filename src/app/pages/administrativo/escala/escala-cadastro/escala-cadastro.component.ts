import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffEventoDto } from 'src/app/models/staff-evento/staff-evento-dto';
import { StaffDto } from 'src/app/models/staff/staff-dto';
import { EscalaService } from 'src/app/services/escala/escala.service';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-escala-cadastro',
  templateUrl: './escala-cadastro.component.html',
  styleUrls: ['./escala-cadastro.component.scss']
})
export class EscalaCadastroComponent implements OnInit{
  formulario: FormGroup;
  eventos: any[];
  source: StaffDto[];
  confirmed: StaffDto[];
  displayFunction = (item: StaffDto) => item.nome;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private escalaSvc: EscalaService,
    private eventoSvc: EventoService ) {
  }

  ngOnInit() {
  this.criarFormulario();
  this.listarEventos();
  }

  criarFormulario(){
    this.formulario = this.formBuilder.group({
      evento: [null, Validators.required]
    });
  }

  listarEventos(){
    this.eventoSvc.listarEventos()
      .subscribe(dados => {
        this.eventos = dados;
      });
  }

  onEventoChange() {
    const selectedEventoId = this.formulario.get('evento').value;
    this.eventoSvc.listarRelacionamentoStaffEventos(selectedEventoId)
      .subscribe((dados: StaffEventoDto) => {
        this.source = dados.staff;
        this.confirmed = dados.staffEvento;
        console.log(this.source);
        console.log(this.confirmed);
      });
  }

  salvarEscala(){
    const valoresDoFormulario = this.formulario.value;

    const dtoTeste: StaffEventoDto = {
      eventoId: valoresDoFormulario.evento,
      staff: this.source,
      staffEvento: this.confirmed
    };

    this.escalaSvc.salvar(dtoTeste)
        .pipe()
        .subscribe((data) => {
          console.log(data);
        })

    // this.eventoSvc.salvar(this.eventoDto)
    //   .pipe()
    //   .subscribe((data) => {
    //     this.router.navigate(['/eventos/listar']);
    //   })
  }

  limpar(){

  }

  voltar(){

  }
}
