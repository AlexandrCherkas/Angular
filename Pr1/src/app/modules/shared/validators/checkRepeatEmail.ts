import { AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserserviceService } from '../../users/services/userservice.service';

export class UserEmailValidator {

  static createValidator(userService: UserserviceService): AsyncValidatorFn {

    return (control: AbstractControl): Observable<any> => {
      return userService
        .checkIfEmailExists(control.value)
        .pipe(
          map((result: boolean) =>
            result ? { usernameAlreadyExists: true } : null
          )
        );
    };
  }

}
