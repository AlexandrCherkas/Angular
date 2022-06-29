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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CardComponent } from './components/card/card.component';
import { SetbarComponent } from './components/setbar/setbar.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    CardComponent,
    SetbarComponent,
    SearchComponent,

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
    MatProgressSpinnerModule
  ],
  exports: [
    CardComponent,
    SetbarComponent,
    SearchComponent,
  ]
})
export class SharedModule { }
