import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}

  public getUsers(): IUser[] {
    return [
      { name: 'Tom', age: 16, activated: true },
      { name: 'Nick', age: 30, activated: true },
      { name: 'Jack', age: 17, activated: true },
      { name: 'Jon', age: 50, activated: true },
    ];
  }
}
