import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/modules/users/interface/user';

import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { ICar } from 'src/app/modules/cars/interface/car';


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

  addToFavorite(user: IUser): void {
    this.favoritesService.toFavorite(user.id, Favotite.User);
  }

  checkIfFavored(userID: number): boolean {
    return this.favoritesService.checkIfFavored(userID, Favotite.User);
  }
}
