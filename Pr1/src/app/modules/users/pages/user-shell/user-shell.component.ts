import { Component, OnInit,  Output,  EventEmitter } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from 'src/app/modules/users/interface/user';
import { IFavoriteCards } from 'src/app/modules/shared/interface/favoriteCard';
import { Favotite } from 'src/app/modules/shared/enums/favorite';
import { SelectedEntitiesService } from 'src/app/modules/shared/services/selected-entities.service';
import { Observable, observeOn, of, Subject, takeUntil, takeWhile, BehaviorSubject, delay, from, switchMap, interval, fromEvent,
  take,  finalize,  mergeMap,  concatMap, pipe,  exhaustMap, tap } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-user-shell',
  templateUrl: './user-shell.component.html',
  styleUrls: ['./user-shell.component.scss'],
})
@Injectable()
export class UserShellComponent implements OnInit {
  @Output() statusSpinner = new EventEmitter();

  public users: IUser[] = [];
  public favorites!: Array<IFavoriteCards>;
  public componentActive = true;

  public length: number = 96;
  public pageIndex: number = 0;
  public pageSize: number = 6;
  public pageSizeOptions: number[] = [6, 12, 24, 48];

  public spinnerStatusSubj: Subject<string> = new Subject();

  public statusButton = false;

  constructor(
    private usersService: UserdataService,
    public favoriteService: SelectedEntitiesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    fromEvent(document.getElementById('refreshPage'), 'click')
      .pipe(
        takeWhile(() => this.componentActive),
        switchMap(() => {
          return this.usersService
            .getUsers(this.pageIndex, this.pageSize)
            .pipe(
              takeWhile(() => this.componentActive),
              switchMap((res) => res));
        })
      )
      .subscribe(() => console.log('ok'));

    fromEvent(document.getElementById('button'), 'click')
      .pipe(
        takeWhile(() => this.componentActive),
        tap(() => console.log('Send')),
        exhaustMap(() => {
          return this.usersService.getUsers(this.pageIndex, this.pageSize).pipe(
            takeWhile(() => this.componentActive),
            exhaustMap((res) => res)
          );
        })
      )
      .subscribe(() => console.log('ok'));

    this.getUsers();
    this.getFavoriteUsers();
  }

  disableMethod(): void {
    this.statusButton = true;
    this.usersService
      .getUsers(this.pageIndex, this.pageSize)
      .subscribe(() => (this.statusButton = false));
  }

  getUsers(): void {
    this.usersService
      .getUsers(this.pageIndex, this.pageSize)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((users: any) => {
        console.log(users);
        this.users = users;
      });
  }

  getFavoriteUsers(): any {
    return this.favoriteService
      .getFavoritesData(Favotite.User)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((users) => {
        this.favorites = users;
      });
  }

  OnPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.getUsers();
  }

  searchUses(event: string) {
    const pageIndex: number = 0;
    const pageSize: number = 96;
    const defaultSize: number = 6;
    const nikName = event;
    this.usersService
      .searchUsersByName(pageIndex, pageSize, nikName, defaultSize)
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((users: any) => {
        (this.users = users), this.spinnerStatusSubj.next('determinate');
      });
  }

  public get statusSpinner$(): Observable<any> {
    return this.spinnerStatusSubj.asObservable();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
