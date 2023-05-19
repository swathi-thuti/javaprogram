import { Component, OnInit } from '@angular/core';
import { EditItemUnitsService } from "../../services/edit-item-units.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";


@Component({
  selector: 'app-edit-item-units',
  templateUrl: './edit-item-units.component.html',
  styleUrls: ['./edit-item-units.component.css']
})
export class EditItemUnitsComponent implements OnInit {
  frmUpdUnit!: FormGroup;
  displayMessage!: { [key: string]: string };
  updateItem: any;
  /*itemUnit: any;*/


  constructor(
    private fb: FormBuilder,
    private editItemUnitsService: EditItemUnitsService,
    private snackBar:MatSnackBar,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.getItemDetails();
  }
  getItemDetails() {
    this.editItemUnitsService
      .getAccountItemUnitsbyid(this.route.snapshot.params["id"])
      .subscribe(
        (response) => {
          this.updateItem = response;
          console.log(response);
          this.ngOnInit();

        },
        (err) => {
          console.log(err);
        }
      );
  }



  ngOnInit(): void {
    this.frmUpdUnit = this.fb.group({
      refId: [this.updateItem?.refId,""],
      shortCode: [this.updateItem?.shortCode,""],
      detailedName: [this.updateItem?.detailedName,""],

    });
  }

  bindData() {
     this.frmUpdUnit = this.fb.group({
      refId: [this.updateItem?.refId,""],
      shortCode: [this.updateItem?.shortCode,""],
      detailedName: [this.updateItem?.detailedName,""],

    });
  }

  updateDetailsItem() {
   const config: MatSnackBarConfig = {
        verticalPosition: "top",
      };

    if (this.frmUpdUnit.valid) {
      this.editItemUnitsService.updateDetailsItem(this.frmUpdUnit.value)
        .subscribe({
          next: (res: any) => {
           this.router.navigate(["/listItemsUnits"]);
          },
          error: (err: any) => {
           this.snackBar.open("Already this unit of  shortcode is present", "Close", {
            ...config,
            duration: 99000,
            });
            console.log(err);
          },
        });
    }
  }


}
