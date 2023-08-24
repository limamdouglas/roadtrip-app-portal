import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstornoComponent } from './estorno.component';

describe('EstornoComponent', () => {
  let component: EstornoComponent;
  let fixture: ComponentFixture<EstornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
