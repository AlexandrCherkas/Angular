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

  constructor(
    private _router: Router,
    private _userdataServece: UserdataService
  ) {}

  ngOnInit(): void {}


  submit(): void {
    console.log(this.parentFormGroup)
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {
      this._userdataServece.createNewUser(this.parentFormGroup.value.user, this.parentFormGroup.value.addresses);
      this._router.navigate(['/users']);
    }
  }
}
