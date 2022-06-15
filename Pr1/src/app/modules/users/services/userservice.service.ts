import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService  {

  private _existingEmails: Array<string>

  constructor(private _userdataService: UserdataService) {
    this._userdataService.getUsersEmail().subscribe(
      (emails:string[]) => this._existingEmails = emails )
  }

  checkIfEmailExists(value: string) {

    return of(this._existingEmails.some((item) => item === value)).
      pipe(
        delay(1000)
      );
  }

}





