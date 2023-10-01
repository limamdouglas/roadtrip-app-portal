import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosEditarComponent } from './eventos-editar.component';

describe('EventosEditarComponent', () => {
  let component: EventosEditarComponent;
  let fixture: ComponentFixture<EventosEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
