import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SetbarComponent } from './components/setbar/setbar.component';

import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    CardComponent,
    SetbarComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
