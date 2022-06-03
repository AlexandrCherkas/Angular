import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function ValidateEmail (emailRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !emailRe.test(control.value);
    return forbidden ? {forbiddenEmail: {value: control.value}} : null;
  };
}
