import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListagemComponent } from './staff-listagem.component';

describe('StaffListagemComponent', () => {
  let component: StaffListagemComponent;
  let fixture: ComponentFixture<StaffListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
