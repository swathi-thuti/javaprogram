import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { ApiIntegrationService } from '../../services/api-integration.service';
import {ProductService} from '../../services/product.service';
import { DateAdapter } from '@angular/material/core';
import {DatePipe} from '@angular/common';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { StorageLocationQtyGridComponent } from '../../models/storage-location-qty-grid/storage-location-qty-grid.component';
import {StoreStorage} from '../../models/StoreStorage';
import {StoreStorageDetailsDTO} from '../../models/StoreStorageDetailsDTO';
import { ProductMaster } from 'src/app/models/product';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";
//import { CreateInwardsClass } from '../../model/create-inwards-class.model';

@Component({
  selector: 'app-create-inwards',
  templateUrl: './create-inwards.component.html',
  styleUrls: ['./create-inwards.component.css']
})
export class CreateInwardsComponent implements OnInit{
  //productName: string = "Paracetomol";
  inwardsForm! : FormGroup;
  responseData: any;
  //storeStorageDetailsListFromDialog = [{storageRefId: 1, qty: 20}];
    /*storeStorageDetailsListFromDialog: StoreStorage[] = []; */
    storeStorageDetailsListFromDialog: StoreStorageDetailsDTO;

    batchQty: number = 0;
    totalQty: number = 0;
    products: ProductMaster[] = [];
  /*createInwardClass : CreateInwardsClass = {
    productName: "Thyronorm",
    productId: 123,
    batchNo: "B123",
    batchQty: 123,
    mfgDate: "",
    retestDate: "",
    COANumber: "",
    CASNumber: "",
    storageConditions: "",
    storageLocation: "",
    projectCode: "",
    formula: "",
    molecularWt: "",
    purityPercent: 80,
    chemicalStructureInfo: "",
    teamInformation: "",

  } */

  constructor(private fb: FormBuilder,
              private apiIntegrationService: ApiIntegrationService,
              private productService: ProductService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar,
              private router: Router
             )
  {
    //storeStorageDetailsListFromDialog.splice(0,1);
     //this.productName = "Yamini";
     /*console.log("productName is" + this.productName); */
     this.storeStorageDetailsListFromDialog = new StoreStorageDetailsDTO();
     this.getProductList();
    }

  ngOnInit(): void {
     this.inwardsForm = this.fb.group({
       productId: ["", [Validators.required, Validators.minLength(3)]],
       batchNo: ["", [Validators.required]],
       batchQty: ["", [Validators.required]],
       mfgDate: ["", [Validators.required]],
       retestDate: ["", [Validators.required]],
       catalogNumber: ["", [Validators.required]],
       coaNumber: ["",[Validators.required]],
       casNumber: ["", [Validators.required]],
       storageConditions: ["", [Validators.required]],
       storageLocation : ["", [Validators.required]],
       projectCode : ["", [Validators.required]],
       formula : ["", [Validators.required]],
       molecularWt: ["", [Validators.required]],
       purityPercent: ["", [Validators.required]],
       chemicalStructureInfo: ["",[Validators.required]],
       teamInformation: ["", [Validators.required]],
       apiName: ["", [Validators.required]],
       categoryType: ["", [Validators.required]],
       storeStorageDetailsList: ["",""]
       /* this.fb.array([
          this.addStoreStorageDetailsListGroup()
       ]) */
    });
    console.log(this.inwardsForm.value);
  } // ngOnInit end brace


   addStoreStorageDetailsListGroup(): FormGroup{
        return this.fb.group({
                 storageRefId: ["",[Validators.required]],
                 qty: ["",[Validators.required]]
                 });
   }

  getProductList(){
      this.productService.getProductList().subscribe(
          (response)=>{this.products = <ProductMaster[]>response;},
          (err)=>{console.log("error");}
      );
  }

  createStoreInwards(){
 /*
      console.log(this.inwardsForm.value);
      this.apiIntegrationService.createStoreInwards(this.inwardsForm.value).subscribe(
      (responseData)=>{
            this.responseData = responseData.content;
            console.log(this.responseData);
            },
       (err)=>{console.log("Error Generated while creating Inwards from server");}
     );
  */


     const config: MatSnackBarConfig = {
       verticalPosition: "top",
     };

     this.apiIntegrationService.createStoreInwards(this.inwardsForm.value).subscribe({
         next: (res) => {
           this.snackBar.open("Create Inwards success", "Close", {
             ...config,
             duration: 9000,
           });
           this.router.navigate(["/viewInwards"]);
         },
         error: (err) => {
           this.snackBar.open("Failed to create Inward", "Close", {
             ...config,
             duration: 9000,
           });
           console.log(err);
         },
       });
   }

   openStorageLocationsDialog(){
    this.storeStorageDetailsListFromDialog.batchQty = this.inwardsForm.value.batchQty;

    const dialogRef = this.dialog.open(
      StorageLocationQtyGridComponent,
      {
        width: "500px",
        data: this.storeStorageDetailsListFromDialog
       }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log(result);
        this.storeStorageDetailsListFromDialog = result;
        this.inwardsForm.controls['storeStorageDetailsList'].setValue(this.storeStorageDetailsListFromDialog.storeStorageList);
        console.log(this.inwardsForm.get('storeStorageDetailsList'));
        let i=0;
        }
     });
   }

   /*addStoreStorageDetailsFromDialog(){
      this.inwardsForm.storeStorageDetailsList = result;
   }*/

   cancelAllValues(){
      this.inwardsForm.reset();
   }
}

