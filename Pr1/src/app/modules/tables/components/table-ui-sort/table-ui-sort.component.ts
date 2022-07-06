import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FrontSortService } from '../../services/front-sort.service';

import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-table-ui-sort',
  templateUrl: './table-ui-sort.component.html',
  styleUrls: ['./table-ui-sort.component.scss']
})
export class TableUiSortComponent implements OnInit, AfterViewInit  {


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  displayedColumns: string[] = ['email', 'firstName', 'age', 'company'];
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  data: []

  start = 0
  end = 96

  constructor( private frontService: FrontSortService) { }
  ngOnInit(): void {
    this.frontService.getUsers(this.start, this.end)
      .subscribe(res => {
        this.data = res,
        this.isLoadingResults = false;
      })
  }


  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => {(this.paginator.pageIndex = 0), console.log('--', this.paginator)});

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;

        return this.frontService.getUsers(

          // this.sort.active,
          // this.sort.direction,
          this.paginator.pageIndex,
          this.paginator.pageSize
        ).pipe(catchError(() => observableOf(null)));
      }),
      map(data => {
        console.log(data)
        this.isLoadingResults = false;
        this.isRateLimitReached = data === null;

        if (data === null) {
          return [];
        }
        this.resultsLength = data.length
        return data
      }),
    )
    .subscribe(data => (this.data = data));
  }
}







  // OnPageChange(event: PageEvent): void{
  //   const startIndex = event.pageIndex * event.pageSize;
  //   let endIndex = startIndex + event.pageSize
  //   if( endIndex > this.usersFormServere.length){
  //     endIndex = this.usersFormServere.length
  //   }
  //   this.modifiedCardUsers = this.usersFormServere.slice(startIndex, endIndex)
  // }








