import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-shell',
  templateUrl: './registration-shell.component.html',
  styleUrls: ['./registration-shell.component.scss']
})
export class RegistrationShellComponent implements OnInit {

  parentFormGroup: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  onRegistrationUser(Form: FormGroup){
    this.parentFormGroup.addControl('user', Form)
  }

  submit(): void{
    console.log('Registr')
    this.parentFormGroup.markAllAsTouched();
    console.log(this.parentFormGroup)

  }
}
