import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-list-product",
  templateUrl: "./list-product.component.html",
  styleUrls: ["./list-product.component.css"],
})
export class ListProductComponent {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  tableSizes: any = [5, 10, 15, 20];

  productListFromHttp: any = null;
  constructor(private router: Router, private productService: ProductService) {
    this.getProductList();
  }
  ngOnInit(): void {}

  onTableDataChange(event: any) {
    this.page = event;
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  getProductList(): void {
    this.productService.getProductList().subscribe(
      (response) => {
        this.productListFromHttp = response;
      },
      (err) => {
        console.log("Error Generated while fetching User List from server");
      }
    );
  }

  createProduct() {
    this.router.navigate(["/createProduct"]);
  }

  openDeleteDialog() {}
}
