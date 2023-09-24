import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoriaEventoComponent } from './select-categoria-evento.component';

describe('SelectCategoriaEventoComponent', () => {
  let component: SelectCategoriaEventoComponent;
  let fixture: ComponentFixture<SelectCategoriaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCategoriaEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCategoriaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
