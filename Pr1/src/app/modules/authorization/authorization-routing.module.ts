import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginShellComponent } from './pages/login-shell/login-shell.component';
import { RegistrationShellComponent } from './pages/registration-shell/registration-shell.component';

const routes: Routes = [
  {path : 'registration', component: RegistrationShellComponent},
  {path : 'login', component: LoginShellComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
