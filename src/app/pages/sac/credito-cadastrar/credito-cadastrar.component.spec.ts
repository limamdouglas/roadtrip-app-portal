import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoCadastrarComponent } from './credito-cadastrar.component';

describe('CreditoCadastrarComponent', () => {
  let component: CreditoCadastrarComponent;
  let fixture: ComponentFixture<CreditoCadastrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditoCadastrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
