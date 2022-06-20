import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IUser } from 'src/app/modules/users/interface/user';
import { IAddress } from '../interface/address';
import { IRemoteUser } from '../interface/remote_users';
import { IUsersWithAddress } from '../interface/user+address';
import { HttpServiceService } from '../../shared/services/http-service.service';
import { ApiServiceService } from '../../shared/services/api-service.service';
import { getNsPrefix } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class UserdataService {

  public usersEmails: Array<string> = [];
  users= []
  constructor(private apiService: ApiServiceService) {}

  public getUsers(page: number, results: number, params?: any): any {
    const path = `?page=${page}&results=${results}&seed=abc`;
    return this.apiService.getUsers(path)
      .pipe(map((usersDTOs: IRemoteUser[]) => {
        return usersDTOs.map((user: IRemoteUser) => this.mapUserDTOtoUser(user))
      })
    )
  }

  public searchUsersByName(page: number, results: number, filter: any, defaultResults: number): any{
    const path = `?page=${page}&results=${results}&seed=abc`;
    const defaultPath = `?page=${page}&results=${defaultResults}&seed=abc`;
    const params = { filter: filter, defaultPath: defaultPath }

    return this.apiService.searchUsersByName(path, params)
      .pipe(map((usersDTOs: IRemoteUser[]) => {
        console.log(usersDTOs);
        return usersDTOs.map((user: IRemoteUser) => this.mapUserDTOtoUser(user))
      })
    )
  }

  public getUserByID(id: string): any {
    const params = {userId: id };
    const path  = `?page=0&results=96&seed=abc`;
    console.log(id)

    return this.apiService.getUserByID(path, params)
      .pipe(map((userDTO: IRemoteUser[]) => {

        console.log(userDTO)
       return userDTO.map((user: IRemoteUser) => this.mapUserDTOtoUser(user))
    })
    )
  }

  public getUsersEmail(): Observable<string[]> {
    this.usersEmails = this.users.map((user) => user.email);
    return of(this.usersEmails)
      .pipe(
        delay(1000)
      );
  }

  private mapUserDTOtoUser(userDTO: IRemoteUser): IUser {
       return {
      id: userDTO.login.uuid,
      title: userDTO.name.title,
      name: userDTO.name.first,
      secondName: userDTO.name.last,
      age: userDTO.dob.age,
      gender: this.whatGender(userDTO.gender),
      phone: userDTO.phone,
      nationality: userDTO.nat,
      email: userDTO.email,
      picture: userDTO.picture.large,
      address: [
        {
          country: userDTO.location.country,
          city: userDTO.location.city,
          zip: userDTO.location.postcode
        }
      ]
    }
  }

  public whatGender(genderName): boolean{
    return genderName == 'male' ? true : false
  }

  public changeUser(user: IUser, userAddAddress: Array<IAddress>): void {
    // let modifiedUser: IUser = {
    //   id: user.id,
    //   name: user.name,
    //   secondName: user.secondName,
    //   email: user.email,
    //   age: user.age,
    //   gender: user.gender,
    //   departament: user.departament,
    //   company: user.company,
    //   imageUrl: user.imageUrl,
    //   address: userAddAddress,
    // };
    // this.users = this.users.map((user) => user.id === modifiedUser.id ? modifiedUser : user
    // );
  }

  public createNewUser(user: IUser, userAddAddress: Array<IAddress>): void {
  //   let newUserWithAddress: IUsersWithAddress = {
  //     id: user.id,
  //     name: user.name,
  //     secondName: user.secondName,
  //     email: user.email,
  //     age: user.age,
  //     gender: user.gender,
  //     departament: user.departament,
  //     company: user.company,
  //     imageUrl: user.imageUrl,
  //     address: userAddAddress,
  //   };
  //   this.users.push(newUserWithAddress);
  }
}
