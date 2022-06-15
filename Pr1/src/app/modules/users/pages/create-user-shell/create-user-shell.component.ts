import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss'],
})
export class CreateUserShellComponent implements OnInit {

  parentFormGroup: FormGroup = new FormGroup({});
  key: string = 'user';

  constructor(
    private _router: Router,
    private _userdataServece: UserdataService
  ) {}

  ngOnInit(): void {}

  onCreateUser(key: string, Form: FormGroup | FormArray): void{
    this.parentFormGroup.addControl(key, Form)
  }


  submit(): void {

    console.log(this.parentFormGroup)
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {
      this._userdataServece.createNewUser(this.parentFormGroup.value.user, this.parentFormGroup.value.address);
      this._router.navigate(['/users']);
    }
  }
}
