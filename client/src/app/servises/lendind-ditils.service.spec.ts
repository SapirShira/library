import { TestBed } from '@angular/core/testing';

import { LendindDitilsService } from './lendind-ditils.service';

describe('LendindDitilsService', () => {
  let service: LendindDitilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendindDitilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
