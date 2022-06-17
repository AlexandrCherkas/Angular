import { Component, OnInit, Input, Output, ViewChild,ChangeDetectorRef } from '@angular/core';
import { IUser } from 'src/app/modules/users/interface/user';
import { IUsersWithAddress } from '../../interface/user+address';

import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { ICar } from 'src/app/modules/cars/interface/car';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable, takeWhile } from 'rxjs';
import { IRemoteUser } from '../../interface/remote_users';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})


export class UserListComponent implements OnInit {

  @ViewChild (MatPaginator) paginator: MatPaginator;


  @Input() users: IUsersWithAddress[] | IUser[]  = [];
  @Input() favorites: IFavoriteCards[] = [];
  @Input() usersObs$: Observable<any>;

  public modifiedCardUsers: any
  public usersFormServere: any

  private _componentActive = true


  constructor(private favoritesService: SelectedEntitiesService) { }

  ngOnInit(): void {
    this.usersObs$
    .pipe(takeWhile(() => this._componentActive))
    .subscribe(data => {
      this.usersFormServere = data,
      this.modifiedCardUsers = this.usersFormServere.slice(0, 3)
    })

  }

  OnPageChange(event: PageEvent): void{
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize
    if( endIndex > this.usersFormServere.length){
      endIndex = this.usersFormServere.length
    }
    this.modifiedCardUsers = this.usersFormServere.slice(startIndex, endIndex)
  }

  addToFavorite(user: IRemoteUser): void {
    console.log(user.login.uuid)
    this.favoritesService.toFavorite(user.login.uuid, Favotite.User);
  }

  checkIfFavored(userID: number): boolean {
    return this.favoritesService.checkIfFavored(userID, Favotite.User);
  }

  ngOnDestroy(): void{
    this._componentActive = false
  }

}
