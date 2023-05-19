import { TestBed } from '@angular/core/testing';

import { StockOutwardCreateService } from './stock-outward-create.service';

describe('StockOutwardCreateService', () => {
  let service: StockOutwardCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockOutwardCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
