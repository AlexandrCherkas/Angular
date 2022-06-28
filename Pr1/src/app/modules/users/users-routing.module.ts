import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserShellComponent } from './pages/user-shell/user-shell.component';
import { CreateUserShellComponent } from './pages/create-user-shell/create-user-shell.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';

const routes: Routes = [
  {path : 'users', component: UserShellComponent},
  {path : 'create', component: CreateUserShellComponent} ,
  {path : 'user/edit/:id', component: EditUserComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
