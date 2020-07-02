import { TestBed } from '@angular/core/testing';

import { SubcriptionTypesService } from './subcription-types.service';

describe('SubcriptionTypesService', () => {
  let service: SubcriptionTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcriptionTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
