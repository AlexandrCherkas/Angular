import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import {
  AsyncSubject,
  BehaviorSubject,
  delay,
  map,
  Observable,
  of,
  ReplaySubject,
  Subject,
  tap,
} from 'rxjs';
import { ApiServiceService } from '../../shared/services/api-service.service';
import { IAuthUser } from '../interfaces/IAuthUser';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {

  private userSubj = new ReplaySubject<IAuthUser>();
  private USER: IAuthUser;
  private authenticatedUsers: IAuthUser[] = [];
  private message: string;

  constructor() {}

  public verificationUser(data: IAuthUser): Observable<IAuthUser> {
    let user = this.authenticatedUsers.find(
      (user) => user.username == data?.['login'] && user.pass == data?.['pass']
    );
    return of(user).pipe(delay(500));
  }

  public authorizedUser(user: IAuthUser | null): void {
    this.USER = user;
    this.userSubj.next(user);
  }

  public getCurrentUser(): Observable<IAuthUser> {
    return this.userSubj.asObservable();
  }

  public checkAuthUser(): IAuthUser {
    return this.USER;
  }

  public signOut(user: IAuthUser): void {
    this.USER = undefined;
    this.userSubj.next(user);
  }

  public createNewUser(user: IAuthUser): Observable<object> {
    let status = true
    if (this.authenticatedUsers.find((userBD: IAuthUser) => userBD.username == user.username)) {
      this.message = 'Such an account has already been registered';
      status = false
    } else {
      this.authenticatedUsers.push(user);
      this.message =
        'You have registered a new user with the name: ' +
        user?.['username'].toUpperCase();
    }
    return of({message: this.message, status: status}).pipe(delay(500));
  }
}
