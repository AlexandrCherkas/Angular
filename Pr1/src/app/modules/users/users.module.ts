import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/angular-material.module';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user/user-list.component';
import { UserShellComponent } from './pages/user-shell/user-shell.component';
import { CreateUserListComponent } from './components/create-user/create-user.component';
import { CreateUserShellComponent } from './pages/create-user-shell/create-user-shell.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { AddressComponent } from './components/address/address.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditUserShellComponent } from './pages/edit-user-shell/edit-user-shell.component';
import { UsersRoutingModule } from './users-routing.module';

import { MatTabsModule } from '@angular/material/tabs';

import { FormatUsernamePipe } from '../shared/pipes/formatUsername.pipe';
import { ShowGenderIconPipe } from '../shared/pipes/formatFont.pipe';
import { FlagCountryPipe } from '../shared/pipes/flagCountry.pipe';
import { PersonalInfoComponent } from './pages/personal-info-shell/personal-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
@NgModule({
  declarations: [
    UserListComponent,
    UserShellComponent,
    CreateUserListComponent,
    CreateUserShellComponent,
    AddressesComponent,
    AddressComponent,
    EditUserComponent,
    EditUserShellComponent,

    FormatUsernamePipe,
    ShowGenderIconPipe,
    FlagCountryPipe,
    PersonalInfoComponent,
    CompanyInfoComponent,
    ContactsComponent,
    UserInfoComponent,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    MatTabsModule

  ],
  exports: [UserShellComponent],
})
export class UsersModule {}
