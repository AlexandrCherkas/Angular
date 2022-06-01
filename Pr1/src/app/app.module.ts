import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


import { UserShellComponent } from './modules/users/components/user-shell/user-shell.component';
import { UserListComponent } from './modules/users/components/user-list/user-list.component';

import { CardComponent } from './modules/shared/components/card/card.component';
import { SetbarComponent } from './modules/shared/components/setbar/setbar.component';

import { CarShellComponent } from './modules/cars/components/car-shell/car-shell.component';
import { CarListComponent  } from './modules/cars/components/car-list/car-list.component';

import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

import { CreateUserListComponent } from './modules/users/components/create-user-list/create-user-list.component';
import { CreateUserShellComponent } from './modules/users/components/create-user-shell/create-user-shell.component';



@NgModule({
  declarations: [
    AppComponent,

    UserShellComponent,
    UserListComponent,

    CardComponent,
    SetbarComponent,

    CarShellComponent,
    CarListComponent,

    FooterComponent,
    HeaderComponent,

    CreateUserListComponent,
    CreateUserShellComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatInputModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
