import { BusinessObject } from "./businessobject";

export class StorageLocation extends BusinessObject{
    referenceId!:number;
    identificationCode!:string;
    detailedDescription!:string;

}