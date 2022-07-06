import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { UserShellComponent } from './pages/user-shell/user-shell.component';
import { CreateUserShellComponent } from './pages/create-user-shell/create-user-shell.component';
import { AllowEntryGuard } from 'src/app/core/guards/allow-entry.guard';
import { LeaveEditUserFormGuard } from 'src/app/core/guards/leave-edit-user-form.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';

import { PersonalInfoComponent } from './pages/personal-info-shell/personal-info.component';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { UserInfoComponent } from './components/user-info/user-info.component';

const routes: Routes = [
  { path: '', component: UserShellComponent },
  { path: 'create', component: CreateUserShellComponent },
  {
    path: 'user/edit/:id',
    canDeactivate: [LeaveEditUserFormGuard],
    component: EditUserComponent,
  },
  {
    path: 'user/info/:id',
    component: PersonalInfoComponent,
    children: [
      { path: '', redirectTo: 'company-info', pathMatch: 'full' },
      { path: 'company-info', component: CompanyInfoComponent },
      { path: 'user-info', component: UserInfoComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
