import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemUnitsComponent } from './list-itemUnits.component';

describe('ListItemUnitsComponent', () => {
  let component: ListItemUnitsComponent;
  let fixture: ComponentFixture<ListItemUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListItemUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
