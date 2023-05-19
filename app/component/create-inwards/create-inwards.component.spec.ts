import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInwardsComponent } from './create-inwards.component';

describe('CreateInwardsComponent', () => {
  let component: CreateInwardsComponent;
  let fixture: ComponentFixture<CreateInwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInwardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
