import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { InwardCatTypeService } from "../../../services/inward-cat-type.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-inward-cat-type-update',
  templateUrl: './inward-cat-type-update.component.html',
  styleUrls: ['./inward-cat-type-update.component.css']
})
export class InwardCatTypeUpdateComponent implements OnInit {
updateForm!: FormGroup
displayMessage!: {[key: string]: string};
updateType: any;
//referenceId: any;

constructor (
          private fb: FormBuilder,
          private router: Router,
          private route: ActivatedRoute,
          private inwardCatTypeService: InwardCatTypeService
          )
          {
          this.loadInwardCategory ();
          }

 loadInwardCategory () {
 this.inwardCatTypeService.getInwardCategorybyId(this.route.snapshot.params["id"])
    .subscribe((response)=> {
     console.log(response);
     //console.log('m2');
     this.updateType = response;
     this.ngOnInit();
     },
     (err) => {
     console.log(err);
     }
     );
   }

   ngOnInit(): void{
      //this.loadInwardCategory();
        //console.log('m1');
        //console.log(this.updateType);
      this.updateForm = this.fb.group({
        referenceId: [this.updateType?.referenceId,""],
        shortCode: [this.updateType?.shortCode, ""],
        detailedName: [this.updateType?.detailedName,""],
   });
 }

  updateCategoryType() {
  if (this.updateForm.valid){
  //this.updateType = this.updateType.get("short")?.value;

  this.inwardCatTypeService.updateCategoryType(this.updateForm.value)
  .subscribe ({
  next: (res:any) => {
  this.router.navigate(["/catList"]);
  },
  error: (err:any) => {
  console.log(err);
  },
  });

  }}


}
