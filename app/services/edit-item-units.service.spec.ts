import { TestBed } from '@angular/core/testing';

import { EditItemUnitsService } from './edit-item-units.service';

describe('EditItemUnitsService', () => {
  let service: EditItemUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditItemUnitsService);
  });

  it('should be updated', () => {
    expect(service).toBeTruthy();
  });
});
