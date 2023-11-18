import { TestBed } from '@angular/core/testing';

import { GmpDateService } from './gmp-date.service';

describe('GmpDateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpDateService = TestBed.get(GmpDateService);
    expect(service).toBeTruthy();
  });
});
