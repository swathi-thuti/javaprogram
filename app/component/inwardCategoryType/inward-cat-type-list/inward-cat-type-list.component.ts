import { Component } from '@angular/core';
import { InwardCatTypeService } from "../../../services/inward-cat-type.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-inward-cat-type-list',
  templateUrl: './inward-cat-type-list.component.html',
  styleUrls: ['./inward-cat-type-list.component.css']
})
export class InwardCatTypeListComponent {

listVals:any;
title = 'pagination testing';
page: number = 1;
count: number = 0;
tableSize: number = 10;

constructor(private router:Router, private inwardCatTypeService: InwardCatTypeService,
 ) {
this.getCategoryList();
}

 onTableSizeChange(event:any){
      this.tableSize = event;
   }


getCategoryList() {
    this.inwardCatTypeService
      .getInwardCategoryList()
      .subscribe((response) => {
        this.listVals = response;
        console.log(response);
      });
  }
createCategory() {
    this.router.navigate(["/inwardCategory/create"]);
}
}
