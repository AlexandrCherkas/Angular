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

  public color: ThemePalette = 'primary';
  public mode: ProgressSpinnerMode = 'determinate'
  public value = 0;

  @Output() changeValueInput = new EventEmitter<string>();
  @Input() spinerStatus: Observable<any>

  public searchControl = new FormControl("");
  private componentArtive  = true

  constructor() { }

  ngOnInit(): void {

    this.spinerStatus
      .pipe()
      .subscribe( status => this.mode = status)

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



