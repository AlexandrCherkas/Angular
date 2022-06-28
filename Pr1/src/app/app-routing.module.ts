import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { LoginShellComponent } from './modules/authorization/pages/login-shell/login-shell.component';
import { RegistrationShellComponent } from './modules/authorization/pages/registration-shell/registration-shell.component';
import { CreateUserShellComponent } from './modules/users/pages/create-user-shell/create-user-shell.component';
// import { CarShellComponent } from './modules/cars/components/car-shell/car-shell.component';
// import { UserShellComponent } from './modules/users/pages/user-shell/user-shell.component';
// import { CreateUserShellComponent } from './modules/users/pages/create-user-shell/create-user-shell.component';
// import { EditUserShellComponent } from './modules/users/pages/edit-user-shell/edit-user-shell.component';
// import { LeaveEditUserFormGuard } from './core/guards/leave-edit-user-form.guard';
// import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
// import { RegistrationShellComponent } from './modules/authorization/pages/registration-shell/registration-shell.component';
// import { LoginShellComponent } from './modules/authorization/pages/login-shell/login-shell.component';
// import { AllowEntryGuard } from './core/guards/allow-entry.guard';


const routes: Routes = [
  {
    path : '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path : 'cars', loadChildren: () => import('./modules/cars/cars.module')
    .then(module => module.CarsModule)
  },
  {
    path : 'users', loadChildren: () => import('./modules/users/users.module')
    .then(module => module.UsersModule)
  },
  {
    path : 'create',  component: CreateUserShellComponent
    // loadChildren: () => import('./modules/users/users.module')
    // .then(module => module.UsersModule)
  },
  // {
  //   path : 'user/edit/:id', loadChildren: () => import('./modules/users/users.module')
  //   .then(module => module.UsersModule)
  // },

  {
    path : 'registration',  component: RegistrationShellComponent

    // loadChildren: () => import('./modules/authorization/authorization.module')
    // .then(module => module.AuthorizationModule)
},
  {
    path : 'login', component: LoginShellComponent

    // loadChildren: () => import('./modules/authorization/authorization.module')
    // .then(module => module.AuthorizationModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
