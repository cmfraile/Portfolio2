import { TestBed } from '@angular/core/testing';

import { FondoeventoService } from './fondoevento.service';

describe('FondoeventoService', () => {
  let service: FondoeventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondoeventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
