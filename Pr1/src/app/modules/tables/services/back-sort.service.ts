import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiServiceService } from '../../shared/services/api-service.service';
import { IRemoteUser } from '../interfaces/IRemoteUser';
import { ITableUser } from '../interfaces/ITableUser';

@Injectable({
  providedIn: 'root'
})
export class BackSortService {

  constructor(
    private apiService: ApiServiceService
  ) { }

  public getUsers(page: number, results: number, params?: any ): Observable<any> {

    console.log(params)
    if(params.direction == 'asc'){
      const path = `?page=${page}&results=${results}&seed=abc`;
      return this.apiService.getUsers(path).pipe(
        map((usersDTOs: IRemoteUser[]) => {
          return this.sort(params.active, usersDTOs)
        })
      );
    }

    else{
      const path = `?page=${page}&results=${results}&seed=abc`;
      return this.apiService.getUsers(path).pipe(
      map((usersDTOs: IRemoteUser[]) => {
        return usersDTOs.map((user: IRemoteUser) =>
          this.mapUserDTOtoUser(user)
        );
      })
    );
    }

  }

  private sort(param: any, users:IRemoteUser[]): any {
    let newUsers = users.map( user =>  this.mapUserDTOtoUser(user))
    return newUsers.sort((a, b) => a?.[`${param}`] > b?.[`${param}`] ? 1 : -1);
  }

  private mapUserDTOtoUser(userDTO: IRemoteUser): ITableUser {
    return {
      id: userDTO.login.uuid,
      personStatus: userDTO.name.title,
      firstName: userDTO.name.first,
      secondName: userDTO.name.last,
      age: userDTO.dob.age,
      company: userDTO.nat,
      email: userDTO.email,
      address: {
        country: userDTO.location.country,
        city: userDTO.location.city,
        street: userDTO.location.street.name,
        number: userDTO.location.street.number,
      },
    };
  }
}
