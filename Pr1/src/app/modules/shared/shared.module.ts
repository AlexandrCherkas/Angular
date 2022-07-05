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
import { MatDialogModule } from '@angular/material/dialog';
import { CardComponent } from './components/card/card.component';
import { SetbarComponent } from './components/setbar/setbar.component';
import { SearchComponent } from './components/search/search.component';
import { DialogAnimationsExampleDialog } from './components/dialog-leave-page/dialog-leave-page.component';
import { MatTabsModule } from '@angular/material/tabs'

@NgModule({
  declarations: [
    CardComponent,
    SetbarComponent,
    SearchComponent,
    DialogAnimationsExampleDialog,
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
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTabsModule
  ],
  exports: [CardComponent, SetbarComponent, SearchComponent],
})
export class SharedModule {}
