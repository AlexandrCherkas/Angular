import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarShellComponent } from './components/car-shell/car-shell.component';

const routes: Routes = [
  {path : 'cars', component: CarShellComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CarsRoutingModule { }
