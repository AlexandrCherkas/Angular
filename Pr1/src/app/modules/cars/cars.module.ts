import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarListComponent } from './components/car-list/car-list.component';
import { CarShellComponent } from './components/car-shell/car-shell.component';
import { CarsRoutingModule } from './cars-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularMaterialModule } from 'src/angular-material.module';
@NgModule({
  declarations: [
    CarListComponent,
    CarShellComponent,
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
    AngularMaterialModule
  ],
  exports: [
    CarShellComponent
  ]

})
export class CarsModule { }
