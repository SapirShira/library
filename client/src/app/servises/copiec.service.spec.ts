import { TestBed } from '@angular/core/testing';

import { CopiecService } from './copiec.service';

describe('CopiecService', () => {
  let service: CopiecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopiecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
