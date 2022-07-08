import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FrontSortService } from '../../services/front-sort.service';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap, takeWhile } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { ITableUser } from '../../interfaces/ITableUser';

@Component({
  selector: 'app-table-ui-sort',
  templateUrl: './table-ui-sort.component.html',
  styleUrls: ['./table-ui-sort.component.scss'],
})
export class TableUiSortComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  public displayedColumns: string[] = ['secondName','email',  'age', 'company', 'city'];
  public resultsLength = 96;
  public pageIndex: number = 0;

  public isLoadingResults = true;
  public isRateLimitReached = false;

  public dataSource: MatTableDataSource<ITableUser>
  public users: ITableUser[]
  public componentActive = true;

  constructor(private frontService: FrontSortService) {}

  ngAfterViewInit() {

    this.frontService.getUsers(this.pageIndex, this.resultsLength)
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(data => {
      this.users = data,
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoadingResults = false;
    })

    this.sort.sortChange
    .pipe(takeWhile(() => this.componentActive))
    .subscribe(() => (this.paginator.pageIndex = 0))
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

}







