import { Component, Input, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from 'src/app/modules/users/interface/user';
import { IUsersWithAddress } from '../../interface/user+address';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
export class UserShellComponent implements OnInit {
  @Input() user: IUser

  public users: IUser[] = [];
  public favorites!: Array<IFavoriteCards>;

  constructor(
    private _usersService: UserdataService,
    public favoriteService: SelectedEntitiesService
  ) {}

  ngOnInit(): void {
    this._usersService.getUsers().subscribe( (users: IUser[]) => this.users = users);
    this.favoriteService.getFavoritesData(Favotite.User).subscribe((users:any[]) => this.favorites = users);
  }
}
