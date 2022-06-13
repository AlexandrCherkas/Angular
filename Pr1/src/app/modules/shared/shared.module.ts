import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SetbarComponent } from './components/setbar/setbar.component';
import { DialogLeavePageComponent } from './components/dialog-leave-page/dialog-leave-page.component';



@NgModule({
  declarations: [
    CardComponent,
    SetbarComponent,
    DialogLeavePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
