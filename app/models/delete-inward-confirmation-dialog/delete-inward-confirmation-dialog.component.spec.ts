import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInwardConfirmationDialogComponent } from './delete-inward-confirmation-dialog.component';

describe('DeleteInwardConfirmationDialogComponent', () => {
  let component: DeleteInwardConfirmationDialogComponent;
  let fixture: ComponentFixture<DeleteInwardConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInwardConfirmationDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteInwardConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
