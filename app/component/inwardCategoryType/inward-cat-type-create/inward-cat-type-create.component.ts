import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InwardCatTypeService } from "../../../services/inward-cat-type.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-inward-cat-type-create',
  templateUrl: './inward-cat-type-create.component.html',
  styleUrls: ['./inward-cat-type-create.component.css']
})
export class InwardCatTypeCreateComponent  {

createVals: any;
categoryForm!: FormGroup;
displayMessage!: {[key: string]: string};
arrayName: any;
shortCode: any;
duplicateForm!: FormGroup;
duplicate: any;

constructor( private router:Router,
             private inwardCatTypeService: InwardCatTypeService,
             private fb: FormBuilder,
             private snackBar: MatSnackBar)
          {
              // this.createCategoryVal();
           }

/*    updateValidation(arrayName,shortCode) {
   (this.form.get(arrayName) as FormArray).controls.forEach(
   group=>group.get(shortCode).updateValueAndValidity()
   )
   } */

      ngOnInit(): void {
           this.categoryForm = this.fb.group({
           shortCode: ["", Validators.required],
           detailedName:["",Validators.required]
           });
           }

      createCategoryVal(){
      const config: MatSnackBarConfig = {
      verticalPosition: "top",
      };

        this.inwardCatTypeService.createCategoryVal(this.categoryForm.value)
        .subscribe({
          next: (res) => {
          this.snackBar.open("category create success","Close", {
          ...config, duration: 9000,});
           this.router.navigate(["/catList"]);
         },
         error:(err) => {
           this.snackBar.open("Failed to create category type", "close",{
           ...config, duration:9000,});
                console.log(err);},

});

}

duplicateShortCode(){
this.duplicate = this.duplicateForm.get("shortCode")?.value;
this.inwardCatTypeService.duplicateShortCode(this.duplicateForm.value, this.duplicate)
.subscribe ({
  next: (res:any) => {
  //this.router.navigate(["/catList"]);
  },
  error: (err:any) => {
  console.log(err);
  },
  });

  }
}
