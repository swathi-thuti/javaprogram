import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCatTypeCreateComponent } from './inward-cat-type-create.component';

describe('InwardCatTypeCreateComponent', () => {
  let component: InwardCatTypeCreateComponent;
  let fixture: ComponentFixture<InwardCatTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardCatTypeCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InwardCatTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
