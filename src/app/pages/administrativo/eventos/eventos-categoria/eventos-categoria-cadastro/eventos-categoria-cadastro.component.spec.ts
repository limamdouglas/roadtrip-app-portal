import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosCategoriaCadastroComponent } from './eventos-categoria-cadastro.component';

describe('EventosCategoriaCadastroComponent', () => {
  let component: EventosCategoriaCadastroComponent;
  let fixture: ComponentFixture<EventosCategoriaCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosCategoriaCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosCategoriaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
