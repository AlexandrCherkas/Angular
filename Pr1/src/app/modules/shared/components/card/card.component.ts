import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() entity!: IUser | ICar;
  @Input() isLikes!: boolean;
  @Input() image: string = '';

  @Output() addToFavoriteEvent: EventEmitter<IUser | ICar> =
  new EventEmitter<IUser | ICar>();

  @Output() removeFromFavoriteEvent: EventEmitter<IUser | ICar> =
    new EventEmitter<IUser | ICar>();

  constructor() {}

  ngOnInit(): void {}

  addToFavorite(): void {
    if (this.isLikes) {
      this.isLikes = !this.isLikes;
      this.removeFromFavoriteEvent.emit(this.entity);
    } else {
      this.isLikes = !this.isLikes;
      this.addToFavoriteEvent.emit(this.entity);
    }
  }
}
