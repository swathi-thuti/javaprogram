import { TestBed } from '@angular/core/testing';

import { AccountItemUnitsService } from './account-item-units.service';

describe('AccountItemUnitsService', () => {
  let service: AccountItemUnitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountItemUnitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
