import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup,  FormControl,  FormBuilder,  Validators,  AbstractControl,  NgForm} from '@angular/forms';
import { ValidateEmail } from 'src/app/modules/shared/validators/checkDomenEmail';

import { UserserviceService } from '../../services/userservice.service';
import { UserdataService } from '../../services/userdata.service';
import { UserEmailValidator } from 'src/app/modules/shared/validators/checkRepeatEmail';
import { IUser } from '../../interface/user';
import { forkJoin, merge, Observable } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, takeWhile } from 'rxjs/operators';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserListComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() currentUser: Observable <IUser | undefined>
  @Input() key: string
  @Output() userFormData = new EventEmitter<FormGroup>();

  private componentArtive  = true

  childFormGroup: FormGroup;
  response = {};
  private _editUserForm: NgForm;
  ID = Math.floor(Math.random() * 10000)

  constructor(
    private fb: FormBuilder,
    private _userService: UserserviceService,
    private _userdataService: UserdataService
  ) {

    this.childFormGroup = this.fb.group({
      id: this.ID,
      name: ['', Validators.required],
      secondName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          ValidateEmail(/^.+@gmail.com$/),
        ],
        [UserEmailValidator.createValidator(this._userService)],
      ],
      company: ['', [Validators.required, Validators.maxLength(35)]],
      departament: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(15), Validators.max(100)]],
      gender: ['', Validators.required],
      imageUrl:
        'http://s1.iconbird.com/ico/2013/6/382/w256h2561372594116ManRed2.png',
    });

  }

  ngOnInit(): void {

    if(this.currentUser){
      this.currentUser
        .pipe(takeWhile(() => this.componentArtive))
        .subscribe(data => {
          this.childFormGroup.patchValue(data)
       })
    }

    this.userFormData.emit(this.childFormGroup)

    merge(
      this.childFormGroup
        .get('name')
        .valueChanges.pipe(map((value) => ({ name: value.toLowerCase() }))),
      this.childFormGroup
        .get('secondName')
        .valueChanges.pipe(
          map((value) => ({ secondName: value.toLowerCase() }))
        )
    ).subscribe((value) => {
      Object.assign(this.response, value),
        this.childFormGroup
          .get('email')
          .setValue(this.createDefaultEmail(this.response));
    });
  }

  createDefaultEmail(data: object): string {
    const generatedEmail = { name: '', secondName: '', domen: '@gmail.com' };
    if (data?.['name']) { generatedEmail.name = data?.['name'] }
    if (data?.['secondName']) { generatedEmail.secondName = data?.['secondName']  }
    return (generatedEmail.name + generatedEmail.secondName + generatedEmail.domen)
  }

  ngOnDestroy():void{
    this.componentArtive = false
  }

}
