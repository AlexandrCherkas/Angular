import { Component,  OnInit,  Input,  Output,  ViewChild,  ChangeDetectorRef,} from '@angular/core';
import { IUser } from 'src/app/modules/users/interface/user';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { UserdataService } from '../../services/userdata.service';
import { concatMap, forkJoin, map, mergeMap, of, Subject, takeWhile, tap,} from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input() users: IUser[] = [];
  @Input() favorites: IFavoriteCards[] = [];

  private exportSubj = new Subject();
  public obs$ = this.exportSubj.asObservable();

  private saveSubj = new Subject();

  private componentActive = true;

  constructor(
    private favoritesService: SelectedEntitiesService,
    private userService: UserdataService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.saveSubj
      .pipe(
        takeWhile(() => this.componentActive),
        concatMap((req) =>
          this.userService.saveUser(req)

        )
      )
      .subscribe((data) => console.log(data));

    this.exportSubj
      .pipe(
        takeWhile(() => this.componentActive),
        mergeMap((req) =>
          this.userService.exportUserToExcel(req)
        )
      )
      .subscribe((data) => console.log(data));
  }

  addToFavorite(user: IUser): void {
    this.favoritesService.toFavorite(user.id, Favotite.User);
  }

  checkIfFavored(userID: string): boolean {
    return this.favoritesService.checkIfFavored(userID, Favotite.User);
  }

  exportUserToExcel(userID: string, userName: string): void {
    let id = userName + ' - ID : ' + userID;
    this.exportSubj.next(id);
  }

  saveUser(userID: string, userName: string): void {
    let id = userName + ' - ID : ' + userID;
    this.saveSubj.next(id);
  }

  editUser(userID: string): void{
    this.router.navigate(['/users/user/edit', userID])
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
