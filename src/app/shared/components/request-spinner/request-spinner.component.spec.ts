import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSpinnerComponent } from './request-spinner.component';

describe('RequestSpinnerComponent', () => {
  let component: RequestSpinnerComponent;
  let fixture: ComponentFixture<RequestSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
