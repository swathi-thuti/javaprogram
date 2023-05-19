import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewInwardsListComponent } from './component/view-inwards-list/view-inwards-list.component';
import { CreateInwardsComponent } from './component/create-inwards/create-inwards.component';
import { ListProductComponent } from './component/manage/product/list-product/list-product.component';
import { ListItemunitsComponent } from './component/list-itemunits/list-itemunits.component';
import { InwardCatTypeListComponent } from './component/inwardCategoryType/inward-cat-type-list/inward-cat-type-list.component';
import { InwardCatTypeCreateComponent } from './component/inwardCategoryType/inward-cat-type-create/inward-cat-type-create.component';

import { StorageLocationComponent } from './component/manage/storagelocations/list-storage/list-storage.component';

import { CreateProductComponent } from './component/manage/product/create-product/create-product.component';

import { RightpaneComponent } from './component/layout/rightpane/rightpane.component';
import { UserListComponent } from './component/manage/users/user-list/user-list.component';
import { CreateUserComponent } from './component/manage/users/create-user/create-user.component';
import { ViewUserComponent } from './component/manage/users/view-user/view-user.component';
import { EditUserComponent } from './component/manage/users/edit-user/edit-user.component';
import { CreateStorageComponent } from './component/manage/storagelocations/create-storage/create-storage.component';
import { UpdateStorageComponent } from './component/manage/storagelocations/update-storage/update-storage.component';
import { ItemUnitsCreateComponent } from './component/item-units-create/item-units-create.component';
import { EditItemUnitsComponent } from './component/edit-item-units/edit-item-units.component';
import { EditProductComponent } from './component/manage/product/edit-product/edit-product.component';
import { LoginComponent } from './component/login/login/login.component';

const routes: Routes = [
  //{ path: "", pathMatch: 'full', redirectTo: '/login' },
  { path: '', component: RightpaneComponent },
  { path: 'login', component: LoginComponent },
  { path: 'viewInwardsList', component: ViewInwardsListComponent },
  { path: 'createInwards', component: CreateInwardsComponent },
  { path: 'users', component: UserListComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'viewUser/:userId', component: ViewUserComponent },
  { path: 'editUser/:userId', component: EditUserComponent },
  { path: 'listProduct', component: ListProductComponent },
  { path: 'listItemsUnits', component: ListItemunitsComponent },
  { path: 'catList', component: InwardCatTypeListComponent },
  { path: 'inwardCategory/create', component: InwardCatTypeCreateComponent },
  
  { path: 'createProduct', component: CreateProductComponent },
    { path: "editProduct/:productId", component: EditProductComponent },

  { path: 'storageList', component: StorageLocationComponent },
  { path: 'createStorage', component: CreateStorageComponent },
  { path: 'editStorage/:id', component: UpdateStorageComponent },
  
  
  { path: 'ItemUnits/create', component: ItemUnitsCreateComponent },
  { path: 'editItemUnits/:id', component: EditItemUnitsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
