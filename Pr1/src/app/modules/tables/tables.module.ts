import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUiSortComponent } from './components/table-ui-sort/table-ui-sort.component';
import { TableServerSortComponent } from './components/table-server-sort/table-server-sort.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableUiSortComponent, TableServerSortComponent],
  imports: [CommonModule, RouterModule],
})
export class TablesModule {}
