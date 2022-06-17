import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from 'src/app/modules/users/interface/user';
import { IUsersWithAddress } from '../../interface/user+address';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { Observable, observeOn, of, Subject, takeUntil, takeWhile, BehaviorSubject, delay } from 'rxjs';
import { Injectable, Inject } from '@angular/core';


@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})

@Injectable()

export class UserShellComponent implements OnInit {
  @Input() user: IUser
  @Output() statusSpiner = new EventEmitter();

  public users: IUser[] = [];
  public favorites!: Array<IFavoriteCards>;
  public componentActive = true;

  public search: Observable<any>
  private parentSubj: Subject<any> = new Subject();

  constructor(
    private _usersService: UserdataService,
    public favoriteService: SelectedEntitiesService
  ) {}

  ngOnInit(): void {
     this._usersService.getUsers()
      .pipe(takeWhile(() => this.componentActive))
      .subscribe( (users: IUser[]) => {
        this.users = users
      });

    this.favoriteService.getFavoritesData(Favotite.User)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((users: any[]) => this.favorites = users);
  }

  usersListAfterSearch(searchValue: any){
    this._usersService.getUsers(searchValue)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((users: IUser[]) => {
        this.users = users,
        this.chengeStatusSpiner()
      });



  }

  public get parentObs$(): Observable<any>{
    return this.parentSubj.asObservable();
  }

  public chengeStatusSpiner(): void {
    this.parentSubj.next('determinate')
  }

  ngOnDestroy(): void{
    this.componentActive = false
  }


}
