import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuitacaoEventoComponent } from './quitacao-evento.component';

describe('QuitacaoEventoComponent', () => {
  let component: QuitacaoEventoComponent;
  let fixture: ComponentFixture<QuitacaoEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuitacaoEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuitacaoEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
