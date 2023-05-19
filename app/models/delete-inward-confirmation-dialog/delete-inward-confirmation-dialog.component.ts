import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-delete-inward-confirmation-dialog',
  templateUrl: './delete-inward-confirmation-dialog.component.html',
  styleUrls: ['./delete-inward-confirmation-dialog.component.css']
})
export class DeleteInwardConfirmationDialogComponent {
 constructor(public dialogRef: MatDialogRef<DeleteInwardConfirmationDialogComponent>,
             @Inject(MAT_DIALOG_DATA) public data: number
 ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

}

