import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { IFavoriteCards } from 'src/app/interfaces/favoriteCard';
import { IUser } from 'src/app/interfaces/user';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  @Input() cars: ICar[] = [];
  @Input() favorites: IFavoriteCards[] = [];

  constructor(private favoritesService: SelectedEntitiesService) {}

  ngOnInit(): void {}

  addToFavorite(car: IUser | ICar): void {
    this.favoritesService.addToFavorite(car.id, Favotite.Car, car.name);
  }

  removeFromFavorite(car: IUser | ICar): void {
    this.favoritesService.removeFromFavorite(car.id, Favotite.Car);
  }

  checkIfFavored(carID: number): boolean {
    return this.favoritesService.checkIfFavored(carID, Favotite.Car);
  }
}
