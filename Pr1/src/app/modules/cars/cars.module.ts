import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarShellComponent } from './components/car-shell/car-shell.component';



@NgModule({
  declarations: [
    CarListComponent,
    CarShellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarsModule { }
