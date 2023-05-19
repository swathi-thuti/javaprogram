import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageLocation } from 'src/app/models/storageLocation';
import { StorageLocationService } from 'src/app/services/storage-location.service';
@Component({
  selector: 'app-create-storage',
  templateUrl: './create-storage.component.html',
  styleUrls: ['./create-storage.component.css'],
})
export class CreateStorageComponent {
  //createStorage: any;
  storageForm!: FormGroup;
  //displayMessage!: { [key: string]: string };

  constructor(
    private router: Router,
    private storageLocationService: StorageLocationService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.storageForm = this.fb.group({
      //accountMasterId: ['', Validators.required],
      identificationCode: ['', Validators.required],
      detailedDescription: ['', Validators.required],
    });
  }

  createStorage() {
    const storage: StorageLocation = {
      detailedDescription: this.storageForm.value['detailedDescription'],
      identificationCode: this.storageForm.value['identificationCode'],
      referenceId: 0,
    };
   
    const config: MatSnackBarConfig = {
      verticalPosition: 'top',
    };

    this.storageLocationService
      .createStorage(storage)
      .subscribe({
        next: (res) => {
          this.snackBar.open('storage create success', 'close', {
            ...config,
            duration: 9000,
          });
          this.router.navigate(['/storageList']);
        },
        error: (err) => {
          this.snackBar.open('Failed to create storage', 'close', {
            ...config,
            duration: 9000,
          });
          console.log(err);
        },
      });
  }
}
