import { Component } from '@angular/core';
import { ApiIntegrationService } from '../../services/api-integration.service';
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import {DeleteInwardConfirmationDialogComponent} from '../../models/delete-inward-confirmation-dialog/delete-inward-confirmation-dialog.component';

@Component({
  selector: 'app-view-inwards',
  templateUrl: './view-inwards.component.html',
  styleUrls: ['./view-inwards.component.css']
})
export class ViewInwardsComponent {

   title = 'pagination testing';
   page: number = 1;
   count: number = 0;
   tableSize: number = 10;

   tableSizes : any = [5, 10, 15, 20];

   //temporary array as data response
   inwardsListFromHttp: any = null;

   constructor(private apiIntegrationService : ApiIntegrationService,
               private router: Router,
               private dialog: MatDialog
               ){
   }

   onTableDataChange(event: any){
      this.page = event;
   }

   onTableSizeChange(event:any){
      this.tableSize = event.target.value;
      this.page = 1;
   }

   ngOnInit():void{
      this.getStoreInwardsListFromEndPoint();
   }

   getStoreInwardsListFromEndPoint():void{
      this.apiIntegrationService.getStoreInwardsUIList().subscribe(
      (response)=>{
            this.inwardsListFromHttp = response;
            //console.log(this.inwardsListFromHttp);
            },
       (err)=>{console.log("Error Generated while fetching Inwards List from server");}
      );
   }

    openDeleteDialog(storeInwardId: any): void {
       const dialogRef = this.dialog.open(
         DeleteInwardConfirmationDialogComponent,
         {
           width: "500px",
           data: storeInwardId,
         }
       );

       dialogRef.afterClosed().subscribe((result) => {
         if (result === true) {
           this.deleteStoreInward(storeInwardId);
         }
       });
   }

   deleteStoreInward(storeInwardId: number):void{
      this.apiIntegrationService.deleteStoreInward(storeInwardId).subscribe(
               (response)=>{
                             this.inwardsListFromHttp = response;
                            },
                (err)=>{console.log("Error Generated while deleting Store Inward");}
              );
   }

  createInwards(){
     this.router.navigate(["/createInwards"]);
  }

  openUpdateStoreInward(storeInwardId: number){
     console.log("Store Inward Id: " + storeInwardId);
     this.router.navigate([`/updateInwards/${storeInwardId}`]);
     console.log("after navigation");
  }

}
