import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class User {
  userId?: number;
  accountId?: number;
  userName?: string;
  userRole?: string;
  }
