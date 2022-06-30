import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { delay, map, Observable, of, ReplaySubject, Subject, tap } from 'rxjs';
import { ApiServiceService } from '../../shared/services/api-service.service';
import { IAuthUser } from '../interfaces/IAuthUser';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {

  private USER = new ReplaySubject <IAuthUser>();
  private authenticatedUsers: IAuthUser[] = [];

  constructor() {}

  public verificationUser(data: IAuthUser): Observable<IAuthUser> {
    let user = this.authenticatedUsers.find(
      (user) => user.username == data?.['login'] && user.pass == data?.['pass']
    );
    return of(user).pipe(delay(500));
  }

  public authorizedUser(user: IAuthUser): void {
    this.USER.next(user);
  }

  public getCurrentUser(): Observable<IAuthUser> {
    return this.USER.asObservable();
  }

  public createNewUser(user: IAuthUser): Observable<string> {
    this.authenticatedUsers.push(user);
    let message =
      'You have registered a new user with the name: ' +
      user?.['username'].toUpperCase();
    return of(message).pipe(delay(500));
  }
}
