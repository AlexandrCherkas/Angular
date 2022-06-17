import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, take, takeUntil } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate'
  value = 0;

  same: any

  @Output() changeValueInput = new EventEmitter<string>();
  @Input() search$: Observable<any>

  public searchControl = new FormControl("");

  constructor() { }

  ngOnInit(): void {

    this.search$.subscribe(value => this.mode = value)

    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged())
    .subscribe((value: string) => {
      this.mode = 'indeterminate'
      this.changeValueInput.emit(value.toLowerCase());

    })


  }

}



