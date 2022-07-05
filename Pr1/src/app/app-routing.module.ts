import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginShellComponent } from './modules/authorization/pages/login-shell/login-shell.component';
import { RegistrationShellComponent } from './modules/authorization/pages/registration-shell/registration-shell.component';
// import { CreateUserShellComponent } from './modules/users/pages/create-user-shell/create-user-shell.component';
// import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
import { AllowEntryGuard } from './core/guards/allow-entry.guard';
// import { LeaveEditUserFormGuard } from './core/guards/leave-edit-user-form.guard';
import { WrapperHeaderComponent } from './core/components/wrapper-header/wrapper-header.component';
import { HeaderComponent } from './core/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '',
    component: WrapperHeaderComponent,
    children: [
      {
        path: 'login',
        component: LoginShellComponent,
      },
      {
        path: 'registration',
        component: RegistrationShellComponent,
      },
    ]
  },

  {
   path: '',
   canActivate: [AllowEntryGuard],
   component: HeaderComponent,
   children: [
    {
      path: 'cars',
      canActivate: [AllowEntryGuard],
      loadChildren: () =>
        import('./modules/cars/cars.module').then((module) => module.CarsModule),
    },
    {
      path: 'users',
      canActivate: [AllowEntryGuard],
      loadChildren: () =>
        import('./modules/users/users.module').then(
          (module) => module.UsersModule
        ),
    },
   ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
