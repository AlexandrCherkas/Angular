import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SetbarComponent } from './components/setbar/setbar.component';
import { DialogLeavePageComponent } from './components/dialog-leave-page/dialog-leave-page.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    CardComponent,
    SetbarComponent,
    DialogLeavePageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
