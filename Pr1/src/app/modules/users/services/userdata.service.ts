import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { IUser } from 'src/app/modules/users/interface/user';
import { IAddress } from '../interface/address';
import { IUsersWithAddress } from '../interface/user+address';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  public usersEmails: Array<string> = []

  public users: IUser[] | IUsersWithAddress[]  = [
    {
      id: 11,
      name: 'Chack',
      secondName: 'Norris',
      email: 'norris@gmail.com',
      age: 56,
      gender: true,
      departament: 'Front End',
      company: 'ISsoft',
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg1855.jpg',
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
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg12.jpg',
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
      imageUrl:'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/c/ce/Scarlett_Johansson.jpg',
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
      imageUrl:'https://www.kinonews.ru/insimgs/persimg/persimg31.jpg',
     }
  ]
  constructor() { }

  public createID(): Observable<number>{
    return of(Math.floor(Math.random() * 10000)).pipe(delay(2000))
  }

  public getUsers(): Observable < IUser[] | IUsersWithAddress[]> {
    return of(this.users).pipe(delay(2000))
  }

  public getUserByID(id: number): Observable< IUser> {
    let user = this.users.find(user => user.id == id)
    return of(user).pipe(delay(2000))
  }

  public getUsersEmail(): Observable <string[]>{
    this.usersEmails = this.users.map(user => user.email)
    return  of(this.usersEmails).pipe(delay(2000))
  }

  public changeUser(user: IUser, userAddAddress: Array<IAddress>): void{
    let modifiedUser: IUser = {
      id: user.id,
      name: user.name,
      secondName: user.secondName ,
      email: user.email,
      age: user.age,
      gender: user.gender,
      departament: user.departament,
      company: user.company,
      imageUrl: user.imageUrl,
      address: userAddAddress
    }
    this.users = this.users.map(user => user.id === modifiedUser.id ? modifiedUser : user)
  }

  public createNewUser(user: IUser, userAddAddress: Array<IAddress>): void {
    let newUserWithAddress: IUsersWithAddress = {
      id: user.id,
      name: user.name,
      secondName: user.secondName ,
      email: user.email,
      age: user.age,
      gender: user.gender,
      departament: user.departament,
      company: user.company,
      imageUrl: user.imageUrl,
      address: userAddAddress
    }
    this.users.push(newUserWithAddress)
  }



}
