import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosStaffCadastroComponent } from './eventos-staff-cadastro.component';

describe('EventosStaffCadastroComponent', () => {
  let component: EventosStaffCadastroComponent;
  let fixture: ComponentFixture<EventosStaffCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosStaffCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosStaffCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
