import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICar } from 'src/app/modules/cars/interface/car';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { IUser } from 'src/app/modules/users/interface/user';
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

  ngOnInit(): void {
  }

  toFavorite(car: ICar): void {
    this.favoritesService.toFavorite(car.id, Favotite.Car);
  }

  checkIfFavored(carID: number): boolean {
    return this.favoritesService.checkIfFavored(carID, Favotite.Car);
  }
}

