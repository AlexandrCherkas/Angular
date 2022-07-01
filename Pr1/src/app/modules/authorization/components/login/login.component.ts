import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() loginFormData = new EventEmitter<FormGroup>();

  public loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder ) {
    this.loginFormGroup = this.fb.group({
      login: ['', Validators.required],
      pass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.loginFormData.emit(this.loginFormGroup)
  }

}
