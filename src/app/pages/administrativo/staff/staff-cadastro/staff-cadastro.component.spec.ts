import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCadastroComponent } from './staff-cadastro.component';

describe('StaffCadastroComponent', () => {
  let component: StaffCadastroComponent;
  let fixture: ComponentFixture<StaffCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
