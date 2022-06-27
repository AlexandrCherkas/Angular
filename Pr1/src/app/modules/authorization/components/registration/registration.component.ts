import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
        confirmPass: ['', Validators.required]
      })

    },  { validator: this.checkPasswords })

  }

  ngOnInit(): void {
    this.registrationFormData.emit(this.registrationFormGroup)
  }

  checkPasswords(group: FormGroup) {
    let pass = group.controls?.['pass'].value;
    let confirmPass = group.controls?.['confirmPass'].value;
    return pass === confirmPass ? null : { notSame: true }
  }






  get pass(): any {
    return this.registrationFormGroup.get('passFormGroup.pass');
  }

  get confirmPass(): any {
    return this.registrationFormGroup.get('passFormGroup.confirmPass');
  }

}
