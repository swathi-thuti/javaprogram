import {StoreStorage} from './StoreStorage';

export class StoreStorageDetailsDTO {

  storeStorageList: StoreStorage[];
  batchQty: number;
  totalQty: number;

  constructor(){
    this.storeStorageList = [];
    this.batchQty = 0;
    this.totalQty = 0;
  }

}
