import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationShellComponent } from './pages/registration-shell/registration-shell.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginShellComponent } from './pages/login-shell/login-shell.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './authorization-routing.module';



@NgModule({
  declarations: [
    RegistrationShellComponent,
    LoginShellComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    ReactiveFormsModule,

    AuthRoutingModule,
  ],
  exports: [
    RegistrationShellComponent,
    LoginShellComponent,
    LoginComponent,
    RegistrationComponent
  ]
})
export class AuthorizationModule { }
