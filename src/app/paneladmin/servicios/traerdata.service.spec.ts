import { TestBed } from '@angular/core/testing';

import { TraerdataService } from './traerdata.service';

describe('TraerdataService', () => {
  let service: TraerdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
