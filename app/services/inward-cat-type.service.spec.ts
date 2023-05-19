import { TestBed } from '@angular/core/testing';

import { InwardCatTypeService } from './inward-cat-type.service';

describe('InwardCatTypeService', () => {
  let service: InwardCatTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InwardCatTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
