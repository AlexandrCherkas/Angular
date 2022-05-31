import { Injectable } from '@angular/core';
import { IUser } from 'src/app/modules/users/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  public users: IUser[] = [
    {
      id: 11,
      name: 'Chack',
      secondName: 'Norris',
      age: 56,
      gender: true,
      departament: 'Front End',
      company: 'ISsoft',
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg1855.jpg'
     },
     {
      id: 22,
      name: 'Johnny',
      secondName: 'Depp',
      age: 25,
      gender: true,
      departament: 'Front End',
      company: 'ISsoft',
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg12.jpg'
     },
     {
      id: 33,
      name: 'Scarlett',
      secondName: 'Johansson',
      age: 38,
      gender: false,
      departament: 'Front End',
      company: 'ISsoft',
      imageUrl:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/ce/Scarlett_Johansson.jpg'
     },
     {
      id: 44,
      name: 'Will',
      secondName: 'Smith',
      age: 40,
      gender: true,
      departament: 'Front End',
      company: 'ISsoft',
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg31.jpg'
     }
  ]
  constructor() { }

  public getUsers(): IUser[] {
    return this.users
  }

  public setUser(user: IUser): void {
    this.users.push(user)

  }

}
