import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInwardsComponent } from './update-inwards.component';

describe('UpdateInwardsComponent', () => {
  let component: UpdateInwardsComponent;
  let fixture: ComponentFixture<UpdateInwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
