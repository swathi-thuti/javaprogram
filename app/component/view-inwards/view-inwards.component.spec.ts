import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInwardsComponent } from './view-inwards.component';

describe('ViewInwardsComponent', () => {
  let component: ViewInwardsComponent;
  let fixture: ComponentFixture<ViewInwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
