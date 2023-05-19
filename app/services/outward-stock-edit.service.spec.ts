import { TestBed } from '@angular/core/testing';

import { OutwardStockEditService } from './outward-stock-edit.service';

describe('OutwardStockEditService', () => {
  let service: OutwardStockEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutwardStockEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
