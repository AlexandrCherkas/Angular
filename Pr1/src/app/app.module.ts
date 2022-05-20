import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


import { CardModule } from './modules/card/card.module';
import { DataModule } from './modules/data/data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,

    CardModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
