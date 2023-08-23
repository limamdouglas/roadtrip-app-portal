import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosLsitarComponent } from './eventos-lsitar.component';

describe('EventosLsitarComponent', () => {
  let component: EventosLsitarComponent;
  let fixture: ComponentFixture<EventosLsitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosLsitarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosLsitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
