import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLocationQtyGridComponent } from './storage-location-qty-grid.component';

describe('StorageLocationQtyGridComponent', () => {
  let component: StorageLocationQtyGridComponent;
  let fixture: ComponentFixture<StorageLocationQtyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageLocationQtyGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageLocationQtyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
