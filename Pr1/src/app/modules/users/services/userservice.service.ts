import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UserdataService } from './userdata.service';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService  {

  private existingEmails: Array<string>
  constructor(private _userdataService: UserdataService) { }

  checkIfEmailExists(value: string) {
    this.existingEmails = this._userdataService.getUsersEmail()
    return of(this.existingEmails.some((item) => item === value)).pipe(
      delay(1000)
    );
  }

}





