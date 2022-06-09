import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmail } from 'src/app/modules/shared/validators/checkDomenEmail';

import { UserserviceService } from '../../services/userservice.service';
import { UserdataService } from '../../services/userdata.service';
import { UserEmailValidator } from 'src/app/modules/shared/validators/checkRepeatEmail';
import { IUser } from '../../interface/user';

@Component({
  selector: 'app-create-user-list',
  templateUrl: './create-user-list.component.html',
  styleUrls: ['./create-user-list.component.scss']

})
export class CreateUserListComponent implements OnInit {
  @Input() currentUser: any
  @Input() formGroup: FormGroup;

  childFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _userService: UserserviceService,
    private _userdataService: UserdataService) { }

  ngOnInit(): void {

    this.childFormGroup = this.fb.group({
      id: this._userdataService.createID(),
      name: ['',Validators.required],
      secondName: ['',Validators.required],
      email:['', [Validators.required, Validators.email, ValidateEmail(/^.+@gmail.com$/)], [UserEmailValidator.createValidator(this._userService)] ],
      company: ['',[Validators.required, Validators.maxLength(35)]],
      departament: ['',[Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(15),Validators.max(100)]],
      gender: ['',Validators.required],
      imageUrl: 'http://s1.iconbird.com/ico/2013/6/382/w256h2561372594116ManRed2.png'
    })

    this.formGroup.addControl('user', this.childFormGroup)
    this.childFormGroup.patchValue(this.currentUser)
  }

}
