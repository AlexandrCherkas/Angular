import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from 'src/app/modules/users/interface/user';
import { IUsersWithAddress } from '../../interface/user+address';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { Observable, observeOn, of, Subject, takeUntil, takeWhile, BehaviorSubject, delay, from} from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
@Injectable()
export class UserShellComponent implements OnInit {

  @Output() statusSpiner = new EventEmitter();

  public users: IUser[] = [];
  public favorites!: Array<IFavoriteCards>;
  public componentActive = true;

  public length: number = 96;
  public pageIndex: number = 0;
  public pageSize: number = 6;
  public pageSizeOptions: number[] = [6, 12, 24, 48]

  public spinerStatusSubj: Subject<string> = new Subject()

  constructor(
    private usersService: UserdataService,
    public favoriteService: SelectedEntitiesService
  ) {}

  ngOnInit(): void {
    this.getUsers();
    this.getFavoriteUsers()
  }

  getUsers(): void{
    this.usersService.getUsers(this.pageIndex, this.pageSize)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((users: any) => {
        console.log(users)
        this.users = users
      });
  }

  getFavoriteUsers(): any {
    return  this.favoriteService.getFavoritesData(Favotite.User)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe(users => {this.favorites = users});
  }

  OnPageChange(event: PageEvent): void{
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getUsers()
  }

  searchUses(event: string){

    const pageIndex: number = 0;
    const pageSize: number = 96;
    const defaultSize: number = 6
    const nikName = event;
    this.usersService.searchUsersByName(pageIndex, pageSize, nikName, defaultSize)
    .pipe(takeWhile(() => this.componentActive))
      .subscribe((users: any) => {
        this.users = users,
        this.spinerStatusSubj.next('determinate')
      });
  }
  // public get parentObs$(): Observable<any> {
  //   return this.parentSubj.asObservable();
  // }

  public get statusSpiner$(): Observable<any> {
    return this.spinerStatusSubj.asObservable();
  }

  // public chengeStatusSpiner(): void {
  //   this.parentSubj.next('determinate');
  // }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
