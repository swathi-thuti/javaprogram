import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { AccountUserManagementService } from "src/app/services/account-user-management.service";
import { DeleteConfirmationDialogComponentComponent } from "src/app/models/delete-confirmation-dialog-component/delete-confirmation-dialog-component.component";
import { AccountUser } from 'src/app/models/accountUser';

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  userListFromHttp: any = null;
  item: any;
  userList : AccountUser[]=[];
  constructor(
    private accountUserService: AccountUserManagementService,
    private router: Router,
    private dialog: MatDialog,
  ) {
  }

  onTableDataChange(event: any) {
    this.page = event;
  }

  openDeleteDialog(item: any): void {
    const dialogRef = this.dialog.open(
      DeleteConfirmationDialogComponentComponent,
      {
        width: "500px",
        data: { userName: item.loginName, email: item.contactEmail },
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.deleteUser(item);
      }
    });
  }

  deleteUser(item: any): void {
    this.accountUserService.deleteUser(item.referenceId).subscribe(
      (response: any) => {
      this.getUserList();
      },
      (err: any) => {
        console.log("failed to delete user");
      }
    );
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
  }

  ngOnInit(): void {
      this.getUserList();
  }

  getUserList(): void {
    this.accountUserService.getUserList().subscribe(
      (userList) => {
        this.userList = userList;
      },
      (err:any) => {
        console.log("Error Generated while fetching User List from server");
      }
    );
  }

  createUser() {
    this.router.navigate(["/createUser"]);
  }
}
