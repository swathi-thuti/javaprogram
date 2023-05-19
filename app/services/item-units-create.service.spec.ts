import { TestBed } from '@angular/core/testing';

import { ItemUnitsCreateService } from './item-units-create.service';

describe('ItemUnitsCreateService', () => {
  let service: ItemUnitsCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemUnitsCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
