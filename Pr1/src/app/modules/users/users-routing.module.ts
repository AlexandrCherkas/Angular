import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserShellComponent } from './pages/user-shell/user-shell.component';
import { CreateUserShellComponent } from './pages/create-user-shell/create-user-shell.component';



const routes: Routes = [
  {
    path : '',
    component:  UserShellComponent
  },

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
