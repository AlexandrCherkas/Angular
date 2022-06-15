import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { CarShellComponent } from './modules/cars/components/car-shell/car-shell.component';
import { UserShellComponent } from './modules/users/pages/user-shell/user-shell.component';
import { CreateUserShellComponent } from './modules/users/pages/create-user-shell/create-user-shell.component';
import { EditUserShellComponent } from './modules/users/pages/edit-user-shell/edit-user-shell.component';
import { ExitEditUserFormGuard } from './core/guards/exit-edit-user-form.guard';



const routes: Routes = [
  {path : 'cars', component: CarShellComponent},
  {path : 'users', component: UserShellComponent},
  {path : 'registration', component: CreateUserShellComponent },
  {path : 'user/edit/:id', component: EditUserShellComponent},
];
// canDeactivate:[ExitEditUserFormGuard]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
