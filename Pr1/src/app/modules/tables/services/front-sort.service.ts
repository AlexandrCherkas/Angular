import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { map, Observable } from 'rxjs';
import { ApiServiceService } from '../../shared/services/api-service.service';
import { IRemoteUser } from '../interfaces/IRemoteUser';
import { ITableUser } from '../interfaces/ITableUser';

@Injectable({
  providedIn: 'root',
})
export class FrontSortService {
  constructor(private apiService: ApiServiceService) {}

  public getUsers(page: number, results: number, params?: any ): Observable<any> {
    const path = `?page=${page}&results=${results}&seed=abc`;
    return this.apiService.getUsers(path).pipe(
      map((usersDTOs: IRemoteUser[]) => {
        return usersDTOs.map((user: IRemoteUser) =>
          this.mapUserDTOtoUser(user)
        );
      })
    );
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
      city: userDTO.location.city,
      address: {
        country: userDTO.location.country,
        cityName: userDTO.location.city,
        street: userDTO.location.street.name,
        number: userDTO.location.street.number,
      }
    };
  }
}
