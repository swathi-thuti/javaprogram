import { BusinessObject } from "./businessobject";

export class AccountRole extends BusinessObject {
  roleId!: number;
  shortCode!: string;
  fullName!: string;
  remarks!: string;
}
