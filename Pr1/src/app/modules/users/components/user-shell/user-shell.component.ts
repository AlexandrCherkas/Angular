import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { IUser} from 'src/app/modules/users/interface/user';
import { IFavoriteCards} from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';


@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss']
})
export class UserShellComponent implements OnInit {

  public users: IUser[] = [];
  public favorites!: Array<IFavoriteCards>;
  // public favoriteNames: any

  constructor(
    public usersService: UserdataService,
    public favoriteService: SelectedEntitiesService
    ) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
    this.favorites = this.favoriteService.getFavoritesData(Favotite.User);

  }


}
