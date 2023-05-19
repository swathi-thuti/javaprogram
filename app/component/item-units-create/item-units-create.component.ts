import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ItemUnitsCreateService } from "../../services/item-units-create.service";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-units",
  templateUrl: "./item-units-create.component.html",
  styleUrls: ["./item-units-create.component.css"],
})
export class ItemUnitsCreateComponent {
  createItem: any;
  unitsForm!: FormGroup;
  displayMessage!: { [key: string]: string };

  constructor(
    private router: Router,
    private itemUnitsCreateService: ItemUnitsCreateService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    //this.CreateItemUnits();
  }

  ngOnInit(): void {
    this.unitsForm = this.fb.group({
      shortCode: ["", Validators.required],
      detailedName: ["", Validators.required],
    });
  }

  createUnitsItem() {
    const config: MatSnackBarConfig = {
      verticalPosition: "top",
    };

    this.itemUnitsCreateService.createUnitsItem(this.unitsForm.value)
      .subscribe({
        next: (res) => {
          this.snackBar.open("Units Create success", "Close", {
            ...config,
            duration: 9000,
          });
          this.router.navigate(["/listItemsUnits"]);
        },
        error: (err: any) => {
          this.snackBar.open(" Already this unit of  shortcode is present", "Close", {
            ...config,
            duration: 99000,
          });
          console.log(err);
        },
      });
  }
}
