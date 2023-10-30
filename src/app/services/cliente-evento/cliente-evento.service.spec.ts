import { TestBed } from '@angular/core/testing';

import { ClienteEventoService } from './cliente-evento.service';

describe('ClienteEventoService', () => {
  let service: ClienteEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
