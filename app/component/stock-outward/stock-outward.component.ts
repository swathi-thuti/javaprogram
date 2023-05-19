import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { StockOutwardService } from "../../services/stock-outward.service";

@Component({
selector: "app-stock-outward",
templateUrl: "./stock-outward.component.html",
styleUrls: ["./stock-outward.component.css"],
})
export class StockOutwardComponent {

//variables needed for pagination
title = 'pagination testing';
page: number = 1;
count: number = 0;
tableSize: number = 10;
tableSizes : any = [5, 10, 15, 20];
 stockListFromHttp:any = null;

constructor(private stockOutwardService: StockOutwardService,
private router: Router) {
     this.getStockList();
  }
  ngOnInit() {}

  onTableSizeChange(event:any){
      this.tableSize = event.target.value;
      this.page = 1;
   }

 onTableDataChange(event: any){
      this.page = event;
   }

getStockList(): void {
    this.stockOutwardService.getStockList().subscribe(
      (response) => {
        console.log(response);
        this.stockListFromHttp = response;
      },
      (err) => {
        console.log("Error Generated while fetching User List from server");
      }
    );
  }
createOutward() {
this.router.navigate(["/outward/create"]);
}
editOutward() {
this.router.navigate(["/outward/edit"]);
}

}
