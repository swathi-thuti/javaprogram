import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './component/login/login/login.component';
import { ViewInwardsListComponent } from './component/view-inwards-list/view-inwards-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/layout/header/header.component';
import { LeftSideMenuComponent } from './component/left-side-menu/left-side-menu.component';
import { RightSideContentComponent } from './component/right-side-content/right-side-content.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserListComponent } from './component/manage/users/user-list/user-list.component';
import { CreateUserComponent } from './component/manage/users/create-user/create-user.component';
import { CreateInwardsComponent } from './component/create-inwards/create-inwards.component';
import { ListProductComponent } from './component/manage/product/list-product/list-product.component';
import { CreateProductComponent } from './component/manage/product/create-product/create-product.component';
import { ListItemunitsComponent } from './component/list-itemunits/list-itemunits.component';
import { DeleteConfirmationDialogComponentComponent } from './models/delete-confirmation-dialog-component/delete-confirmation-dialog-component.component';
import { InwardCatTypeListComponent } from './component/inwardCategoryType/inward-cat-type-list/inward-cat-type-list.component';
import { InwardCatTypeCreateComponent } from './component/inwardCategoryType/inward-cat-type-create/inward-cat-type-create.component';
import { MainpageComponent } from './component/layout/mainpage/mainpage.component';
import { RightpaneComponent } from './component/layout/rightpane/rightpane.component'
import {RequestInterceptor} from './request.interceptor'
import { InwardCatTypeUpdateComponent } from './component/inwardCategoryType/inward-cat-type-update/inward-cat-type-update.component';
import { ViewUserComponent } from './component/manage/users/view-user/view-user.component';
import { EditUserComponent } from './component/manage/users/edit-user/edit-user.component';
import { StorageLocationComponent } from './component/manage/storagelocations/list-storage/list-storage.component';
import { CreateStorageComponent } from './component/manage/storagelocations/create-storage/create-storage.component';
import { UpdateStorageComponent } from './component/manage/storagelocations/update-storage/update-storage.component';

import { ItemUnitsCreateComponent } from './component/item-units-create/item-units-create.component';
import { EditItemUnitsComponent } from './component/edit-item-units/edit-item-units.component';
import { EditProductComponent } from './component/manage/product/edit-product/edit-product.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TestComponent } from './test/test.component';
import { MatTableModule } from '@angular/material/table';

//import { UpdateInwardsComponent } from './component/update-inwards/update-inwards.component';
//import {NgToastModule} from 'ng-angular-popup';
//import {NgConfirmModule} from 'ng-confirm-box';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewInwardsListComponent,
    HeaderComponent,
    LeftSideMenuComponent,
    RightSideContentComponent,
    DashboardComponent,
    UserListComponent,
    CreateUserComponent,
    ViewUserComponent,
    CreateInwardsComponent,
    ListProductComponent,
    CreateProductComponent,
    EditUserComponent,
    ListItemunitsComponent,
    InwardCatTypeListComponent,
    InwardCatTypeCreateComponent,

    DeleteConfirmationDialogComponentComponent,
    InwardCatTypeUpdateComponent,
    MainpageComponent,
    RightpaneComponent,
    StorageLocationComponent,
    CreateStorageComponent,
    UpdateStorageComponent,
    UpdateStorageComponent,
    EditProductComponent,
    UpdateStorageComponent,
    ItemUnitsCreateComponent,
    EditItemUnitsComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
   // NgConfirmModule,
    BrowserAnimationsModule,
   LayoutModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RequestInterceptor,
      multi:true,
      }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
