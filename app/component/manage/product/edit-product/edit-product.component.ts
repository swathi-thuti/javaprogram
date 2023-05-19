import { Component, OnInit } from '@angular/core';
import { ProductService } from "src/app/services/product.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductMaster } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit  {

productForm = new FormGroup({
  fullName: new FormControl(),
  molecularWeight: new FormControl(),
  itemPurity: new FormControl(),
  storageCode: new FormControl(),
  delFlag: new FormControl(),
  additionalInfo:new FormControl(),
  shortCode: new FormControl(),
});
product!:ProductMaster;
referenceId:number=this.route.snapshot.params["productId"];

constructor(
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private route:ActivatedRoute){

}
ngOnInit()
{ 
   if (this.referenceId>0) this.getProductDetails();
}
getProductDetails() {
    this.productService
      .getProductById(this.referenceId)
      .subscribe(
        (product) => {
          //this.product = product;
          this.loadData(product)


        },
        (err) => {
          console.log(err);
        }
      );
  }
 loadData(product:ProductMaster): void{
   this.productForm.patchValue(product) ;
  //  = this.fb.group({
  //    fullName: [this.product?.fullName,Validators.required],
  //    molecularWeight: [this.product?.molecularWeight,Validators.required],
  //    itemPurity: [this.product?.itemPurity,Validators.required],
  //    storageCode: [this.product?.storageCode,Validators.required],
  //    delFlag: [this.product?.delFlag,Validators.required],
  //    additionalInfo: [this.product?.additionalInfo,Validators.required],
  //    shortCode: [this.product?.shortCode,Validators.required],
  //  });
 }

editProductDetails(){
    if (this.productForm.valid) {
      const product:ProductMaster=<ProductMaster>this.productForm.value;
      product.referenceId=this.referenceId;

      console.log(product);
      

      this.productService
        .updateProduct(product)
        .subscribe({
          next: (res:any) => {
            //this.router.navigate(["/users"]);
          },
          error: (err:any) => {
           console.log(err);
          },
        });
    }
}

}
