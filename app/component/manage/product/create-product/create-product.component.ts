import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"],
})
export class CreateProductComponent {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productListService: ProductService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      fullName: ["", Validators.required],
      molecularWeight: ["", Validators.required],
      itemPurity: ["", Validators.required],
      storageCode: ["", Validators.required],
      delFlag: ["", Validators.required],
      additionalInfo: ["", Validators.required],
      shortCode: ["", Validators.required],
    });
  }

  addProductDetails() {
    const config: MatSnackBarConfig = {
      verticalPosition: "top",
    };
    if (this.productForm.valid) {
      console.log(this.productForm.valid);
      this.productListService.createProduct(this.productForm.value).subscribe({
        next: (res) => {
          this.snackBar.open("User create success", "Close", {
            ...config,
            duration: 9000,
          });
          this.router.navigate(["/productList"]);
        },
        error: (err) => {
          this.snackBar.open("Failed to create user", "Close", {
            ...config,
            duration: 9000,
          });
          console.log(err);
        },
      });
    }
  }
}
