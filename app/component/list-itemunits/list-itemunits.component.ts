import { Component } from '@angular/core';
import { AccountItemUnitsService } from "../../services/account-item-units.service";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-list-itemunits',
  templateUrl: './list-itemunits.component.html',
  styleUrls: ['./list-itemunits.component.css']
})
export class ListItemunitsComponent {
  title ='pagination testing';
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  tableSizes: any = [5, 10, 15, 20];

  listItemsUnitsHttp: any = null;

  constructor( private accountItemUnitsService: AccountItemUnitsService, private router: Router) {
    this.getAccountItemUnits();
  }
      onTableDataChange(event: any) {
        this.page = event;
      }
      onTableSizeChange(event: any) {
        this.tableSize = event.target.value;
        this.page = 1;
      }


  ngOnInit(): void {}

  getAccountItemUnits(): void {
       this.accountItemUnitsService.getAccountItemUnits().subscribe(
      (response) => {
        this.listItemsUnitsHttp = response;
      },
      (err) => {
        console.log("Error Generated while fetching User List from server");
      }
    );
  }


  createUnit() {
    this.router.navigate(["/ItemUnits/create"]);
  }

}
