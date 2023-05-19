import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {StoreStorageDetailsDTO} from '../../models/StoreStorageDetailsDTO';
import {StoreStorage} from '../../models/StoreStorage';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-storage-location-qty-grid',
  templateUrl: './storage-location-qty-grid.component.html',
  styleUrls: ['./storage-location-qty-grid.component.css']
})
export class StorageLocationQtyGridComponent implements OnInit{
  storageLoc: string="";
  qty: number = 0;
  storageForm! : FormGroup;
  i: number = -1;
  addFlag: boolean = true;
  itemIndex: number = -1;
  totalQty: number = 0;
  batchQty: number = 0;
  storeStorageDetailsDTO: StoreStorageDetailsDTO;
  storeStorageList: StoreStorage[]=[];

  constructor(private fb: FormBuilder,
              public dialogRef: MatDialogRef<StorageLocationQtyGridComponent>,
              @Inject(MAT_DIALOG_DATA) public data: StoreStorageDetailsDTO
              ){
               this.storeStorageList = data.storeStorageList.slice();
               this.batchQty = data.batchQty;
               this.totalQty = data.totalQty;

               this.storeStorageDetailsDTO = new StoreStorageDetailsDTO();
    }

  ngOnInit(): void{
          this.storageForm = this.fb.group({
            storageRefId: ["", [Validators.required]],
            qty: ["", [Validators.required]],
         });
   }

  addStorageLocation(): void{
     alert("totalQty is " + (this.totalQty + parseFloat(this.storageForm.value.qty)) + "\nBatch Qty is " + this.data.batchQty);

     if(this.batchQty < this.totalQty + parseFloat(this.storageForm.value.qty ))
     {
       alert("Total Quantity in Storage Locations Exceeding Batch Qty" + this.data.batchQty);
       return;
     }

     this.storeStorageList.forEach((item)=> {
            if(this.storageForm.value.storageRefId === item.storageRefId) {
                alert("Inside IF Storage location already present..Can't enter again");
                this.addFlag = false;
                return;
                alert("return statement executed");
            }
     });
     alert("after forEach");
     if(this.addFlag){
     this.storeStorageList.push(this.storageForm.value);
     this.i++;
     this.totalQty += parseFloat(this.storageForm.value.qty);
     console.log(this.storeStorageList);
     console.log(this.storageForm);
     alert("totalQty is "+this.totalQty);
     }
     this.addFlag = true;
     return;
  }

  deleteStorageEntry(item: StoreStorage){
     this.totalQty = this.totalQty - item.qty;
     this.itemIndex = this.storeStorageList.indexOf(item, 0);
     this.storeStorageList.splice(this.itemIndex, 1);
   }

  onNoClick(): void {
    this.dialogRef.close(false);
   }

  onYesClick(): void {
    this.storeStorageDetailsDTO.storeStorageList = this.storeStorageList;
    this.storeStorageDetailsDTO.batchQty = this.batchQty;
    this.storeStorageDetailsDTO.totalQty = this.totalQty;
    this.dialogRef.close(this.storeStorageDetailsDTO);
  }
}
