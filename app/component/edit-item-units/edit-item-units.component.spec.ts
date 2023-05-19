import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemUnitsComponent } from './edit-item-units.component';

describe('EditItemUnitsComponent', () => {
  let component: EditItemUnitsComponent;
  let fixture: ComponentFixture<EditItemUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditItemUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditItemUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
