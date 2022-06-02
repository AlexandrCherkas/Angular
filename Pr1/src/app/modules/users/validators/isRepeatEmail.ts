import { AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserserviceService } from '../services/userservice.service';

export class UsernameValidator {

  static createValidator(userService: UserserviceService): AsyncValidatorFn {

    return (control: AbstractControl): Observable<any> => {
      return userService
        .checkIfUsernameExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          )
        );
    };
  }

}
