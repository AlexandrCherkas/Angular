import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UserItemComponent } from './components/user-item/user-item.component';

@NgModule({
  declarations: [
    UserComponent,
    UserItemComponent,
    // UsersComponent
  ],
  imports: [CommonModule],
  exports: [UserComponent],
})
export class SharedModule {}
