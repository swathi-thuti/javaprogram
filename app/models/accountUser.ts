import { BusinessObject } from "./businessobject";
import { AccountMaster } from "./accountMaster";
import { AccountRole } from "./accountRole";

export class AccountUser extends BusinessObject {
  referenceId!: number;
  loginName!: string;
  password!: string;
  fullName!: string;
  contactEmail!: string;
  contactPhone!: string;
  status!: string;
  additionalInfo!: string;
  accountMasterEntity !: AccountMaster | undefined;
  userRoleEntity !: AccountRole | undefined;
}
