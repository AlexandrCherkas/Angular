import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from 'src/app/modules/cars/interface/car';
import { IUser } from 'src/app/modules/users/interface/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() isLikes!: boolean;
  @Input() image: string = '';

  @Output() toFavoriteEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addToFavorite(): void {
    this.toFavoriteEvent.emit();
    this.isLikes = !this.isLikes;
  }
}
