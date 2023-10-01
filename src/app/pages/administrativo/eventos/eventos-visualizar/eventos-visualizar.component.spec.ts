import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosVisualizarComponent } from './eventos-visualizar.component';

describe('EventosVisualizarComponent', () => {
  let component: EventosVisualizarComponent;
  let fixture: ComponentFixture<EventosVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosVisualizarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
