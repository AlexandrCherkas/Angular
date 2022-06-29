import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

import { LeaveEditUserFormGuard } from './core/guards/leave-edit-user-form.guard';

import { AuthorizationModule } from './modules/authorization/authorization.module';
import { CarsModule } from './modules/cars/cars.module';
import { UsersModule } from './modules/users/users.module';
import { AngularMaterialModule } from 'src/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,

    AuthorizationModule,
    // CarsModule,
    // UsersModule
  ],
  providers: [LeaveEditUserFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
