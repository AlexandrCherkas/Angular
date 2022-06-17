import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, Subscription, take, takeUntil, takeWhile } from 'rxjs';
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
  @Input() searchStatus$: Observable<any>

  public searchControl = new FormControl("");
  private componentArtive  = true

  constructor() { }

  ngOnInit(): void {

    this.searchStatus$
      .pipe(takeWhile(() => this.componentArtive))
      .subscribe(value => this.mode = value)

    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      takeWhile(() => this.componentArtive))
    .subscribe((value: string) => {
      this.mode = 'indeterminate'
      this.changeValueInput.emit(value.toLowerCase());

    })


  }
  ngOnDestroy():void{
    this.componentArtive = false
  }

}



