import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventoDto } from 'src/app/models/eventos/evento/evento-dto';
import { HttpClient } from '@angular/common/http';
import { EventoService } from 'src/app/services/evento/evento.service';

@Component({
  selector: 'app-eventos-editar',
  templateUrl: './eventos-editar.component.html',
  styleUrls: ['./eventos-editar.component.scss']
})
export class EventosEditarComponent {

  eventoDto: EventoDto;

  constructor(private Router: Router,
    private FormBuilder: FormBuilder,
    private http: HttpClient,
    private eventoSvc: EventoService) {
      this.eventoDto = this.eventoSvc.getEvento();
    }


  ngOnInit() {
    console.log(this.eventoDto);
  }

}
