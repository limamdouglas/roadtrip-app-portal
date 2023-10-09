import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosCadastroComponent } from './pedidos-cadastro.component';

describe('PedidosCadastroComponent', () => {
  let component: PedidosCadastroComponent;
  let fixture: ComponentFixture<PedidosCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
