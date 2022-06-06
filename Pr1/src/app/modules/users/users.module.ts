import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserShellComponent } from './components/user-shell/user-shell.component';
import { CreateUserListComponent } from './components/create-user-list/create-user-list.component';
import { CreateUserShellComponent } from './components/create-user-shell/create-user-shell.component';
import { AddressesComponentComponent } from './components/addresses-component/addresses-component.component';
import { AddressComponentComponent } from './components/address-component/address-component.component';




@NgModule({
  declarations: [
    UserListComponent,
    UserShellComponent,
    CreateUserListComponent,
    CreateUserShellComponent,
    AddressesComponentComponent,
    AddressComponentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class UsersModule { }
