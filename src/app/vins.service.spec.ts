import { TestBed } from '@angular/core/testing';

import { VinService } from './vins.service';

describe('VinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VinService = TestBed.get(VinService);
    expect(service).toBeTruthy();
  });
});
