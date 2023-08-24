import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoListarComponent } from './credito-listar.component';

describe('CreditoListarComponent', () => {
  let component: CreditoListarComponent;
  let fixture: ComponentFixture<CreditoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
