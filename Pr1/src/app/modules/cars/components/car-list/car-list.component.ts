import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  @Input() car: any;
  @Input() carLikesStatus: string = "primary"

  @Output() onLikes = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  isLikes(car: ICar): void {

    if( this.carLikesStatus == "primary"){
      this.carLikesStatus = "warn"
    } else{
      this.carLikesStatus = "primary"
    }
    this.onLikes.emit();



  }
}
