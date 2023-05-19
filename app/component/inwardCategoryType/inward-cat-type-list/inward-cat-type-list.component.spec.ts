import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardCatTypeListComponent } from './inward-cat-type-list.component';

describe('InwardCatTypeListComponent', () => {
  let component: InwardCatTypeListComponent;
  let fixture: ComponentFixture<InwardCatTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InwardCatTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InwardCatTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
