import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserserviceService {

  private existingUsernames = ['norris@gmail.com', 'depp@gmail.com', 'johansson@gmail.com'];


  constructor() { }

  checkIfUsernameExists(value: string) {
    return of(this.existingUsernames.some((a) => a === value)).pipe(
      delay(1000)
    );
  }

}





