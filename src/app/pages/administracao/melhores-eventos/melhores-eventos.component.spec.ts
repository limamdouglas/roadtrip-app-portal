import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MelhoresEventosComponent } from './melhores-eventos.component';

describe('MelhoresEventosComponent', () => {
  let component: MelhoresEventosComponent;
  let fixture: ComponentFixture<MelhoresEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MelhoresEventosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MelhoresEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
