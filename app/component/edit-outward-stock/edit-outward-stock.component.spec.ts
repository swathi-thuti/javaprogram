import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOutwardStockComponent } from './edit-outward-stock.component';

describe('EditOutwardStockComponent', () => {
  let component: EditOutwardStockComponent;
  let fixture: ComponentFixture<EditOutwardStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOutwardStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOutwardStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
