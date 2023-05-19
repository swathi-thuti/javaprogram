import { BusinessObject } from "./businessobject";

export class AccountMaster extends BusinessObject {
  referenceId!: number;
  organisation!: string;
  address!: string;
  website!: string;
  contactEmail!: string;
  contactPhone!: string;
  remarks!: string;
}
