import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ValidateEmail (nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}
