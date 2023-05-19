import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCatTypeUpdateComponent } from './inward-cat-type-update.component';

describe('InwardCatTypeUpdateComponent', () => {
  let component: InwardCatTypeUpdateComponent;
  let fixture: ComponentFixture<InwardCatTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardCatTypeUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InwardCatTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
