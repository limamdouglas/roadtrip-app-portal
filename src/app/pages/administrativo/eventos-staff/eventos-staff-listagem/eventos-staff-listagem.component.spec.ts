import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosStaffListagemComponent } from './eventos-staff-listagem.component';

describe('EventosStaffListagemComponent', () => {
  let component: EventosStaffListagemComponent;
  let fixture: ComponentFixture<EventosStaffListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosStaffListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosStaffListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
