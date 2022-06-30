import { Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { HttpServiceService } from './http-service.service';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpService: HttpServiceService) { }

  getUsers(path: string, params?: object): Observable<any>{
    return this.httpService.get(path, params).pipe(

      map((response: any) => {
       return response;
      })
    )
  }

  searchUsersByName(path: string, params?: object): Observable<any>{
    const DefaultPath = params?.['defaultPath']
    const SearchPath = path

    if(params?.['filter']){
      return this.httpService.get(SearchPath).pipe(
        map((response: any) => {
          console.log(response)
           return response.filter((user: any) => `${user.name.last} ${user.name.last}`.toLowerCase().includes(params?.['filter']))
        })
      )
    } else{
        return this.httpService.get(DefaultPath).pipe(
          map((response: any) => {
           return response;
          })
        )
      }
  }

  public getUserByID(path: string, params?: object): any{
    const userID = params?.['userId']
    return this.httpService.get(path).pipe(
      map((response: any) => {
        return response.filter((user: any) => user.login.uuid == userID)
      })
    )
  }

  public apiVerificationUser(path: string, params?: object): Observable<any> {
    let login = params?.['login'];
    let pass = params?.['pass'];
    return this.httpService.get(path, params).pipe(
      map((response: any) => {
        return response.filter((user: any) => user.name.first == login && user.login.password == pass)
      })
    )
  }


}
