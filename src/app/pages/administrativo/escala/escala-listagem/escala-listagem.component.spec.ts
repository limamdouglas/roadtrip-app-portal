import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaListagemComponent } from './escala-listagem.component';

describe('EscalaListagemComponent', () => {
  let component: EscalaListagemComponent;
  let fixture: ComponentFixture<EscalaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalaListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
