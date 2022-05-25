import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserShellComponent } from './components/user-shell/user-shell.component';




@NgModule({
  declarations: [
    UserListComponent,
    UserShellComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class UsersModule { }
