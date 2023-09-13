import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosClientesCadastroComponent } from './eventos-clientes-cadastro.component';

describe('EventosClientesCadastroComponent', () => {
  let component: EventosClientesCadastroComponent;
  let fixture: ComponentFixture<EventosClientesCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosClientesCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosClientesCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
