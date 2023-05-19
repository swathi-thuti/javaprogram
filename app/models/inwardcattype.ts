import { BusinessObject } from "./businessobject";

export class InwardCatType extends BusinessObject
{
referenceId!:number;
accountMasterId!:number;
shortCode!:string;
detailedName!:string;
}
