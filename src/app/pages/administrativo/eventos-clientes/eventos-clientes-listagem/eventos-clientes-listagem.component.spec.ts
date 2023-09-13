import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosClientesListagemComponent } from './eventos-clientes-listagem.component';

describe('EventosClientesListagemComponent', () => {
  let component: EventosClientesListagemComponent;
  let fixture: ComponentFixture<EventosClientesListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosClientesListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosClientesListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
