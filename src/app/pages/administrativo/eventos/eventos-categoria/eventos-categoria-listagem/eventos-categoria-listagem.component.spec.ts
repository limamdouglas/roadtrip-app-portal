import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCategoriaListagemComponent } from './eventos-categoria-listagem.component';

describe('EventosCategoriaListagemComponent', () => {
  let component: EventosCategoriaListagemComponent;
  let fixture: ComponentFixture<EventosCategoriaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosCategoriaListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosCategoriaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
