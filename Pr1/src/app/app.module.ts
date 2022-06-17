import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';



import { UserShellComponent } from './modules/users/pages/user-shell/user-shell.component';
import { UserListComponent } from './modules/users/components/user/user-list.component';

import { CardComponent } from './modules/shared/components/card/card.component';
import { SetbarComponent } from './modules/shared/components/setbar/setbar.component';

import { CarShellComponent } from './modules/cars/components/car-shell/car-shell.component';
import { CarListComponent  } from './modules/cars/components/car-list/car-list.component';

import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';

import { CreateUserListComponent } from './modules/users/components/create-user/create-user.component';
import { CreateUserShellComponent } from './modules/users/pages/create-user-shell/create-user-shell.component';

import { AddressesComponent } from './modules/users/components/addresses/addresses.component';
import { AddressComponent } from './modules/users/components/address/address.component';

import { EditUserComponent } from './modules/users/components/edit-user/edit-user.component';
import { EditUserShellComponent } from './modules/users/pages/edit-user-shell/edit-user-shell.component';

import { DialogLeavePageComponent } from './modules/shared/components/dialog-leave-page/dialog-leave-page.component';
import { DialogAnimationsExampleDialog } from './modules/shared/components/dialog-leave-page/dialog-leave-page.component';
import { SearchComponent } from './modules/shared/components/search/search.component';

import { LeaveEditUserFormGuard } from './core/guards/leave-edit-user-form.guard';



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
    CreateUserShellComponent,

    AddressesComponent,
    AddressComponent,

    EditUserComponent,
    EditUserShellComponent,
    DialogLeavePageComponent,
    DialogAnimationsExampleDialog,

    SearchComponent,


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
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,

    // MatPaginator,
    // MatTableModule



  ],
  providers: [LeaveEditUserFormGuard, DialogLeavePageComponent, UserShellComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
