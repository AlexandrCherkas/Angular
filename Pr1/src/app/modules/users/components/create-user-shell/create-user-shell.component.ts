import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss'],
})
export class CreateUserShellComponent implements OnInit {
  parentFormGroup: FormGroup = new FormGroup({});

  isValid: boolean = false;

  constructor(
    private _router: Router,
    private _userdataServece: UserdataService
  ) {}

  ngOnInit(): void {
    console.log(this.parentFormGroup)
  }

  submit(): void {
    console.log(this.parentFormGroup)

    if (this.parentFormGroup.status == 'VALID') {
      this._userdataServece.createNewUser(this.parentFormGroup.value.user);
      this._router.navigate(['/users']);
    } else {
      this.isValid = true;
    }
  }
}
