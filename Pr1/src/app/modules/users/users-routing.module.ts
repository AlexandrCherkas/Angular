import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserShellComponent } from './pages/user-shell/user-shell.component';
import { CreateUserShellComponent } from './pages/create-user-shell/create-user-shell.component';
import { AllowEntryGuard } from 'src/app/core/guards/allow-entry.guard';
import { LeaveEditUserFormGuard } from 'src/app/core/guards/leave-edit-user-form.guard';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  // { path: '',  redirectTo: '/', pathMatch: 'full'},
  { path: '',  component:  UserShellComponent },
  { path: 'create', component: CreateUserShellComponent },
  { path: 'user/edit/:id', canDeactivate : [LeaveEditUserFormGuard], component: EditUserComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
