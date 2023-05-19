import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideContentComponent } from './right-side-content.component';

describe('RightSideContentComponent', () => {
  let component: RightSideContentComponent;
  let fixture: ComponentFixture<RightSideContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
