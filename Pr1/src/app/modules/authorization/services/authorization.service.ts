import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { delay, map, Observable, of, Subject, tap } from 'rxjs'
import { ApiServiceService } from '../../shared/services/api-service.service';
import { IAuthUser } from '../interfaces/IAuthUser';


@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  public UserM: IAuthUser
  private USER = new Subject<IAuthUser>();
  private authenticatedUsers: IAuthUser[] = []

  constructor() { }

  public verificationUser(data: IAuthUser): Observable<IAuthUser> {
    let user = this.authenticatedUsers.find((user) => user.username == data?.['login'] && user.pass == data?.['pass'])
    return of(user).pipe(delay(500))
  }

  public authorizedUser(user: IAuthUser): Observable<boolean>{
    this.USER.next(user)
    return of(true).pipe(delay(500))
  }

  public getCurrentUser(): Observable<IAuthUser>{
    console.log('tuck tuck')
    return this.USER.asObservable()
  }

  public createNewUser(user: IAuthUser): Observable<string>{
    this.authenticatedUsers.push(user)
    let message = 'You have registered a new user with the name: ' + user?.['username'].toUpperCase()
    return of(message).pipe(delay(500))
  }




}



