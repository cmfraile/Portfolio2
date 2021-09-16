import { TestBed } from '@angular/core/testing';

import { MenucambioService } from './menucambio.service';

describe('MenucambioService', () => {
  let service: MenucambioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenucambioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
