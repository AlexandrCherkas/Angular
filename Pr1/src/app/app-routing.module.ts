import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { CarShellComponent } from './modules/cars/components/car-shell/car-shell.component';
import { UserShellComponent } from './modules/users/components/user-shell/user-shell.component';



const routes: Routes = [
  {path : 'cars', component: CarShellComponent},
  {path : 'users', component: UserShellComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
