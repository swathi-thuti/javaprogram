import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpaneComponent } from './rightpane.component';

describe('RightpaneComponent', () => {
  let component: RightpaneComponent;
  let fixture: ComponentFixture<RightpaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightpaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
