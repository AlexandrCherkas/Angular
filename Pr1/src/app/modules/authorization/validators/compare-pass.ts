import { FormControl, ValidatorFn } from '@angular/forms';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value
      ? null
      : { mismatch: true };
  };
}

export { passwordMatchValidator };
