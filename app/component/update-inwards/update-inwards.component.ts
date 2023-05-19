import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from "@angular/forms";
import { ApiIntegrationService } from "../../services/api-integration.service" ;
import {ProductService} from '../../services/product.service';
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { StorageLocationQtyGridComponent } from '../../models/storage-location-qty-grid/storage-location-qty-grid.component';
import {StoreStorage} from '../../models/StoreStorage';
import {StoreStorageDetailsDTO} from '../../models/StoreStorageDetailsDTO';
import { ProductMaster } from 'src/app/models/product';

@Component({
  selector: 'app-update-inwards',
  templateUrl: './update-inwards.component.html',
  styleUrls: ['./update-inwards.component.css']
})
export class UpdateInwardsComponent {
  productName: string = "Paracetomol";
  updateInwardsForm! : FormGroup;
  responseData: any;
  storeInwards: any;
  inwardsId: number = 0;
  totalQty: number = 0;
  batchQty: number = 0;
  storeStorageDetailsListFromDialog: StoreStorageDetailsDTO;
  products: ProductMaster[] = [];

  constructor(private fb: FormBuilder,
              private apiIntegrationService: ApiIntegrationService,
              private productService: ProductService,
              private dialog: MatDialog,
              private router: Router,
              private route:ActivatedRoute
    ){
          this.storeStorageDetailsListFromDialog = new StoreStorageDetailsDTO();
          this.inwardsId = this.route.snapshot.params["storeInwardId"];
          this.getProductList();
          this.getStoreInwardsById();

     }

    ngOnInit(): void {
       this.updateInwardsForm = this.fb.group({
         productId: [this.storeInwards?.productId, [Validators.required, Validators.minLength(3)]],
         //productId: ["", [Validators.required, Validators.minLength(3)]],
         batchNo: [this.storeInwards?.batchNo, [Validators.required]],
         batchQty: [this.storeInwards?.batchQty, [Validators.required]],
         mfgDate: [this.storeInwards?.mfgDate, [Validators.required]],
         retestDate: [this.storeInwards?.retestDate, [Validators.required]],
         catalogNumber: [this.storeInwards?.catalogNumber, [Validators.required]],
         coaNumber: [this.storeInwards?.coaNumber,[Validators.required]],
         casNumber: [this.storeInwards?.casNumber, [Validators.required]],
         storageConditions: [this.storeInwards?.storageConditions, [Validators.required]],
         storageLocation : [this.storeInwards?.storageLocation, [Validators.required]],
         projectCode : [this.storeInwards?.projectCode, [Validators.required]],
         formula : [this.storeInwards?.formula, [Validators.required]],
         molecularWt: [this.storeInwards?.molecularWt, [Validators.required]],
         purityPercent: [this.storeInwards?.purityPercent, [Validators.required]],
         chemicalStructureInfo: [this.storeInwards?.chemicalStructureInfo,[Validators.required]],
         teamInformation: [this.storeInwards?.teamInformation, [Validators.required]],
         apiName: [this.storeInwards?.apiName, [Validators.required]],
         categoryType: [this.storeInwards?.categoryType, [Validators.required]],
         //storeStorageDetailsList: [this.storeInwards?.storeStorageDetailsList]
         storeStorageDetailsList: ["",""]
      });
      this.updateInwardsForm.controls['storeStorageDetailsList'].setValue(this.storeStorageDetailsListFromDialog.storeStorageList);
      console.log(this.updateInwardsForm.value);
    } // ngOnInit end brace

 getStoreInwardsById(){
     this.apiIntegrationService.getStoreInwardsById(this.inwardsId).subscribe(
        (response) => {
                  this.storeInwards = response;

                  //this.updateInwardsForm.controls['storeStorageDetailsList'].setValue(this.storeStorageDetailsListFromDialog.storeStorageList);
                  this.storeStorageDetailsListFromDialog.storeStorageList = response.storeStorageDetailsList;
                  this.storeStorageDetailsListFromDialog.batchQty = response.batchQty;
                  for(let i = 0; i<this.storeStorageDetailsListFromDialog.storeStorageList.length; i++){
                      this.totalQty = this.totalQty + this.storeStorageDetailsListFromDialog.storeStorageList[i].qty ;
                  }
                  this.storeStorageDetailsListFromDialog.totalQty = this.totalQty;
                  this.ngOnInit();
                 },
         (err) => { console.log(err); }
       );
 }

  getProductList(){
       this.productService.getProductList().subscribe(
           (response)=>{this.products = <ProductMaster[]>response;},
           (err)=>{console.log("error");}
       );
   }

  updateStoreInwards(){
     this.updateInwardsForm.controls['storeStorageDetailsList'].setValue(this.storeStorageDetailsListFromDialog.storeStorageList);
     this.apiIntegrationService.updateStoreInwards(this.inwardsId, this.updateInwardsForm.value).subscribe(
      (response) => {
                      //this.storeStorageDetailsListFromDialog =
                      this.router.navigate(["/viewInwards"]);
                    },
       (err) =>  {console.log(err);}
     );
  }

  openStorageLocationsDialog(){
    this.storeStorageDetailsListFromDialog.batchQty = this.updateInwardsForm.value.batchQty;

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
        //this.updateInwardsForm.controls['storeStorageDetailsList'].setValue(this.storeStorageDetailsListFromDialog.storeStorageList);
        console.log(this.updateInwardsForm.get('storeStorageDetailsList'));
        let i=0;
        }
     });
   }

   cancelAllValues(){
      this.updateInwardsForm.reset();
   }
}
