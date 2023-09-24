import { TestBed } from '@angular/core/testing';

import { RequestSpinnerService } from './request-spinner.service';

describe('RequestSpinnerService', () => {
  let service: RequestSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
