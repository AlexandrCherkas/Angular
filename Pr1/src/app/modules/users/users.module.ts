import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserShellComponent } from './components/user-shell/user-shell.component';
import { CreateUserListComponent } from './components/create-user-list/create-user-list.component';
import { CreateUserShellComponent } from './components/create-user-shell/create-user-shell.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddressComponent } from './components/address/address.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUserShellComponent } from './pages/edit-user-shell/edit-user-shell.component';




@NgModule({
  declarations: [
    UserListComponent,
    UserShellComponent,
    CreateUserListComponent,
    CreateUserShellComponent,
    AddressesComponent,
    AddressComponent,
    EditUserComponent,
    EditUserShellComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class UsersModule { }
