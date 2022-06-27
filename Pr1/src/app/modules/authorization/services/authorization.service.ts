import { Injectable } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { map, Observable, tap } from 'rxjs'
import { ApiServiceService } from '../../shared/services/api-service.service';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

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



}



