import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoClienteComponent } from './solicitacao-cliente.component';

describe('SolicitacaoClienteComponent', () => {
  let component: SolicitacaoClienteComponent;
  let fixture: ComponentFixture<SolicitacaoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitacaoClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
