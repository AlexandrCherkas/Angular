import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from '../enums/favorite';


type FavoriteMap = {
  [key in Favotite]: number[]
}
const favoriteMap: FavoriteMap = {
  [Favotite.Car]: [],
  [Favotite.User]: [],
}

@Injectable({
  providedIn: 'root',
})


export class SelectedEntitiesService {

  constructor() {}

  getFavoritesData(type: Favotite): Observable <any[]> {
    console.log('dfsdf')
   return of(favoriteMap[type]).pipe(delay(1000));
  }


  toFavorite(id: any, type: Favotite): void {
    if(favoriteMap[type].includes(id)){
      let index: any = favoriteMap[type].indexOf(id)
      favoriteMap[type].splice(index, 1)
    } else {
      favoriteMap[type].push(id);
    }
  }

  checkIfFavored(entityId: number, entityType: Favotite): boolean {
    return favoriteMap[entityType].find((favorite) => {
      return favorite == entityId;
    })
      ? true
      : false;
  }



}
