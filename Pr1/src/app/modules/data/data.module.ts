import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetDataComponent } from './set-data/set-data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SetDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SetDataComponent
  ]
})
export class DataModule { }
