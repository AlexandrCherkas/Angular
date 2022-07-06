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
import { MatTableModule } from '@angular/material/table'

import { DemoInterceptor } from './core/interceptors/demo.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpServiceService } from './modules/shared/services/http-service.service';
import { WrapperHeaderComponent } from './core/components/wrapper-header/wrapper-header.component';
import { TableUiSortComponent } from './modules/tables/components/table-ui-sort/table-ui-sort.component';
import { TableServerSortComponent } from './modules/tables/components/table-server-sort/table-server-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperHeaderComponent,
    TableUiSortComponent,
    TableServerSortComponent,
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
    MatTableModule
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
