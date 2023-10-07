import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaCadastroComponent } from './escala-cadastro.component';

describe('EscalaCadastroComponent', () => {
  let component: EscalaCadastroComponent;
  let fixture: ComponentFixture<EscalaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
