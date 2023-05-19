import {StoreStorage} from "./StoreStorage";

export class StoreInward
{
 storeInwardId? : number;
 mfgDate! :number;
 productName! :String;
 batchQty! : number;
 condition! : number;
 storeStorageInventoryEntityList: StoreStorage[];

 constructor(){
   this.storeStorageInventoryEntityList = [];
 }
}
