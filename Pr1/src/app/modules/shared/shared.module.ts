import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SetbarComponent } from './components/setbar/setbar.component';



@NgModule({
  declarations: [
    CardComponent,
    SetbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
