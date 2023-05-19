import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageLocation } from 'src/app/models/storageLocation';
import { StorageLocationService } from 'src/app/services/storage-location.service';

@Component({
  selector: 'app-update-storage',
  templateUrl: './update-storage.component.html',
  styleUrls: ['./update-storage.component.css'],
})
export class UpdateStorageComponent implements OnInit {

  locationForm= new FormGroup({
    identificationCode:new FormControl(''),
    detailedDescription:new FormControl('')
  });

  location!: StorageLocation;
  id: number = this.route.snapshot.params['id'];
  constructor(
//    private fb: FormBuilder,
    private storageLocationService: StorageLocationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getStorage(this.id);
  }

  getStorage(id: number) {
    this.storageLocationService.getStorageById(id).subscribe(
      (location) => {
        this.location = location;
        this.loadValues(location);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  loadValues(location: StorageLocation) {
    console.log(location );
    this.locationForm.patchValue(location);
    /* this.locationForm = this.fb.group({
      identificationCode: [this.location.identificationCode,Validators.required],
      detailedDescription: [this.location.detailedDescription,Validators.required],
    }); */
  }
  
  updateStorageType() {
   
    if (this.locationForm.valid) {
      
     const location=<StorageLocation>this.locationForm.value;
   
     location.referenceId=this.location.referenceId;
      
    this.storageLocationService
        .updateStorageType(location)
        .subscribe({
          next: (res: any) => {
            this.router.navigate(['/editStorage/' ,location.referenceId]);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
    }
  }
}
