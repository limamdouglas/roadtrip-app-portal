import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosVisualizarAdmComponent } from './eventos-visualizar-adm.component';

describe('EventosVisualizarAdmComponent', () => {
  let component: EventosVisualizarAdmComponent;
  let fixture: ComponentFixture<EventosVisualizarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosVisualizarAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosVisualizarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
