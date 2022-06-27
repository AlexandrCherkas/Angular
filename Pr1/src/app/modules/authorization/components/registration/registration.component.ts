import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

function passwordMatchValidator(password: string): ValidatorFn {
  return (control: FormControl) => {
    console.log(control)
    if (!control || !control.parent) {
      return null;
    }
    return control.parent.get(password).value === control.value ? null : { mismatch: true };
  };
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @Output() registrationFormData = new EventEmitter<FormGroup>();

  public registrationFormGroup: FormGroup;
  // public passFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

    this.registrationFormGroup = this.fb.group({
      username: ['', Validators.required],

      passFormGroup: this.fb.group ({
        pass: ['', Validators.required],
        confirmPass: ['', [Validators.required, passwordMatchValidator('pass')]]
      })

    })

  }

  ngOnInit(): void {
    this.registrationFormData.emit(this.registrationFormGroup)
  }

  get pass(): any {
    return this.registrationFormGroup.get('passFormGroup.pass');
  }

  get confirmPass(): any {
    return this.registrationFormGroup.get('passFormGroup.confirmPass');
  }

}
