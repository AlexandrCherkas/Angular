import { Injectable } from '@angular/core';
import { IFavoriteCards } from 'src/app/interfaces/favoriteCard';
import { Favotite } from '../enums/favorite';

@Injectable({
  providedIn: 'root',
})
export class SelectedEntitiesService {
  private favorites_: Array<IFavoriteCards> = [];

  constructor() {}

  getFavoritesData(): Array<IFavoriteCards> {
    return this.favorites_;
  }

  addToFavorite(id: number, type: Favotite, name: string): void {
    this.favorites_.push({
      id: id,
      type: type,
      name: name,
    });
  }

  removeFromFavorite(entityID: number, entityType: Favotite): void {
    let favoriteID = this.favorites_.findIndex((favorite) => {
      return favorite.id == entityID && favorite.type == entityType;
    });
    this.favorites_.splice(favoriteID, 1);
  }

  checkIfFavored(entityId: number, entityType: Favotite): boolean {
    return this.favorites_.find((favorite) => {
      return favorite.type == entityType && favorite.id == entityId;
    })
      ? true
      : false;
  }
}
