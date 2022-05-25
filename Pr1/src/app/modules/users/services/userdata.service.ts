import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  public getUsers(): IUser[] {
    return [
      {
        id: 100000,
        name: 'Chack',
        age: 56,
        gender: true,
        department: 'Front End',
        company: 'ISsoft',
        imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg1855.jpg'
       },
       {
        id: 200000,
        name: 'Johnny',
        age: 25,
        gender: true,
        department: 'Front End',
        company: 'ISsoft',
        imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg12.jpg'
       },
       {
        id: 300000,
        name: 'Scarlett',
        age: 38,
        gender: false,
        department: 'Front End',
        company: 'ISsoft',
        imageUrl:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/ce/Scarlett_Johansson.jpg'
       },
       {
        id: 400000,
        name: 'Will',
        age: 40,
        gender: true,
        department: 'Front End',
        company: 'ISsoft',
        imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg31.jpg'
       }

    ];

  }

}
