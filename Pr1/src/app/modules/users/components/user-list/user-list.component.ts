import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

import { IFavoriteCards } from 'src/app/interfaces/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { ICar } from 'src/app/interfaces/car';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() users: IUser[] = [];
  @Input() favorites: IFavoriteCards[] = [];

  constructor(private favoritesService: SelectedEntitiesService) { }

  ngOnInit(): void {
  }

   addToFavorite(user: IUser | ICar): void {
    this.favoritesService.addToFavorite(user.id, Favotite.Car, user.name);
  }

  removeFromFavorite(user: IUser | ICar): void {
    this.favoritesService.removeFromFavorite(user.id, Favotite.User);
  }

  checkIfFavored(userID: number): boolean {
    return this.favoritesService.checkIfFavored(userID, Favotite.User);
  }
}
