import {BusinessObject} from "./businessobject";

export class ProductMaster extends BusinessObject

{
referenceId? :number;
shortCode! : String;
fullName! : String;
molecularWeight! :String;
itemPurity! :String;
storageCode! :String;
chemicals! : String;
additionalInfo!: String;
delFlag !: String;
}
