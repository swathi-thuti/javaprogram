import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class Global {
  constructor(private route:ActivatedRoute){}

 mainMenu?: boolean = false;
}
