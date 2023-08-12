import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCadastrarComponent } from './eventos-cadastrar.component';

describe('EventosCadastrarComponent', () => {
  let component: EventosCadastrarComponent;
  let fixture: ComponentFixture<EventosCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
