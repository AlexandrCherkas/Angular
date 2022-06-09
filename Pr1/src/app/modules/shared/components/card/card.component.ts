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
  @Input() image!: string;
  @Input() id!: number;

  @Output() toFavoriteEvent = new EventEmitter();
  // @Output() toEditUserEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void { }

  addToFavorite(): void {
    this.toFavoriteEvent.emit();
    this.isLikes = !this.isLikes;
  }

  // editUser(): void{
  //   console.log(this.id)
  //   this.toEditUserEvent.emit()
  // }
}
