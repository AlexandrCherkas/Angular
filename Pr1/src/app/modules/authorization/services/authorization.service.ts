import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { map, Observable, of, Subject, tap } from 'rxjs'
import { ApiServiceService } from '../../shared/services/api-service.service';



@Injectable({
  providedIn: 'root'
})

export class AuthorizationService {

  USER = new Subject();

  constructor(private apiService: ApiServiceService) { }

  public verificationUser(data: FormGroup): Observable<any> {
    console.log(data)
    const path = '?page=0&results=96&seed=abc';
    return this.apiService.apiVerificationUser(path, data)
    .pipe(
      map((userDTO) => {
        const user = userDTO[0]
        return user;
      })
    );

  }

  public authorizedUser(user: object): void{
    const title = user?.['name'].title
    const first = user?.['name'].first
    const last = user?.['name'].last
    const photo = user?.['picture'].thumbnail
    console.log(title, first, last )
    let DTO = { userName: title + ' ' + first + ' ' + last, photoUser: photo }
    this.USER.next(DTO)
  }

  public currentUser(): Observable<any>{
    return this.USER.asObservable()
  }



}



