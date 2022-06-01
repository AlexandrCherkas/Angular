import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserdataService } from '../../services/userdata.service';

@Component({
  selector: 'app-create-user-shell',
  templateUrl: './create-user-shell.component.html',
  styleUrls: ['./create-user-shell.component.scss']
})
export class CreateUserShellComponent implements OnInit {

  parentFormGroup: FormGroup = new FormGroup({})

  constructor(private _router: Router, private _userdataServece: UserdataService) { }

  ngOnInit(): void {

  }

  sibmit() {
    this._userdataServece.createNewUser(this.parentFormGroup.value.user);
    this._router.navigate(["/users"])

  }
}
