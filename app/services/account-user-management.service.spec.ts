import { TestBed } from '@angular/core/testing';

import { AccountUserManagementService } from './account-user-management.service';

describe('AccountUserManagementService', () => {
  let service: AccountUserManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountUserManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
