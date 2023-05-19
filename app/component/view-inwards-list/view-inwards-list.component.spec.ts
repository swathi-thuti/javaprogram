import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInwardsListComponent } from './view-inwards-list.component';

describe('ViewInwardsListComponent', () => {
  let component: ViewInwardsListComponent;
  let fixture: ComponentFixture<ViewInwardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInwardsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInwardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
