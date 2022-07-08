import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import {catchError, map,  startWith,  switchMap,  takeWhile,  tap,} from 'rxjs/operators';

import { BackSortService } from '../../services/back-sort.service';
import { ITableUser } from '../../interfaces/ITableUser';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-server-sort',
  templateUrl: './table-server-sort.component.html',
  styleUrls: ['./table-server-sort.component.scss'],
})
export class TableServerSortComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = ['secondName','email','age','company','city'];
  public data: ITableUser[];
  public dataSource: MatTableDataSource<ITableUser>;

  public resultsLength = 96;
  public isLoadingResults = true;
  public isRateLimitReached = false;

  public componentActive = true;

  constructor(private backService: BackSortService) {}

  ngAfterViewInit() {
    this.sort.sortChange
      .pipe(takeWhile(() => this.componentActive))
      .subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        takeWhile(() => this.componentActive),
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.backService!.getUsers(
            this.paginator.pageIndex + 1,
            this.paginator.pageSize,
            {
              active: this.sort.active,
              direction: this.sort.direction,
            }
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          return data;
        })
      )
      .subscribe((data) => (this.data = data));
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
