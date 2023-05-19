import { Component } from '@angular/core';
import { ApiIntegrationService } from '../../services/api-integration.service';

@Component({
  selector: 'app-view-inwards-list',
  templateUrl: './view-inwards-list.component.html',
  styleUrls: ['./view-inwards-list.component.css']
})
export class ViewInwardsListComponent {
   //variables needed for pagination
   title = 'pagination testing';
   page: number = 1;
   count: number = 0;
   tableSize: number = 10;

   tableSizes : any = [5, 10, 15, 20];

   //temporary array as data response
   inwardsListFromHttp: any = null;
   inwardsList = [
     {date: "20/1/2022",
      product: "thyroxine",
      qty: "12",
      condition: "good",
      location: "Bachupally"
     },
     {date: "9/2/2021",
      product: "crocin",
      qty: "50",
      condition: "average",
      location: "Ameerpet"
     }
   ];

   constructor(private apiIntegrationService : ApiIntegrationService){
       for(let i = 0; i<20; i++){
          this.inwardsList.push({date: "9/2/1999",
                                          product: "crocin",
                                          qty: "67",
                                          condition: "average",
                                          location: "Ameerpet"
                                         });
       }
   }

   onTableDataChange(event: any){
      this.page = event;
   }

   onTableSizeChange(event:any){
      this.tableSize = event.target.value;
      this.page = 1;
   }

   ngOnInit():void{
      this.getInwardsListFromEndPoint();
   }

   getInwardsListFromEndPoint():void{
      this.apiIntegrationService.getInwardsList().subscribe(
      (response)=>{
            this.inwardsListFromHttp = response.content;
            console.log(this.inwardsListFromHttp);
            },
       (err)=>{console.log("Error Generated while fetching Inwards List from server");}
      );
   }
}
