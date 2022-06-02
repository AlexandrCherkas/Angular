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
      email: 'norris@gmail.com',
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
      email: 'depp@gmail.com',
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
      email: 'johansson@gmail.com',
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
      email: 'smith@gmail.com',
      age: 40,
      gender: true,
      departament: 'Front End',
      company: 'ISsoft',
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg31.jpg'
     }
  ]
  constructor() { }

  public createID(): number{
    return Math.floor(Math.random() * 10000);
  }

  public getUsers(): IUser[] {
    return this.users
  }

  public createNewUser(user: IUser): void {

    this.users.push(user)
  }

}
