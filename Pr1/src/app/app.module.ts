import { NgModule } from '@angular/core';
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

import { AngularMaterialModule } from 'src/angular-material.module';

import { DemoInterceptor } from './core/interceptors/demo.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceService } from './modules/shared/services/http-service.service';
import { WrapperHeaderComponent } from './core/components/wrapper-header/wrapper-header.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, WrapperHeaderComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationModule,
  ],
  providers: [
    LeaveEditUserFormGuard,
    HttpServiceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DemoInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
