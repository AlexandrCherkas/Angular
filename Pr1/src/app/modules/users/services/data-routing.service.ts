import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { IUser } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class DataRoutingService {

  private currentUser = new ReplaySubject<IUser>();

  constructor() { }

  public pushUser(user: IUser | null): void {
    this.currentUser.next(user);
  }

  public getCurrentUser(): Observable<IUser> {
    return this.currentUser.asObservable();
  }
}
