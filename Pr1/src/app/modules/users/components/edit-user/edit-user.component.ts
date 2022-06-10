import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IUser } from '../../interface/user';
import { UserdataService } from '../../services/userdata.service';
import { FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  @ViewChild("editUserForm")
  private _editUserForm: NgForm;
  parentFormGroup: FormGroup = new FormGroup({});

  id: any | null;
  user: IUser | undefined

  constructor(
    private _route: ActivatedRoute,
    private _userdataService: UserdataService,
    private _router: Router ) {  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.user = this._userdataService.getUserByID(this.id)
  }

  hasUnsavedData(): boolean | null {
    return this._editUserForm.dirty;
  }

  editUser(): void{
    console.log(this.parentFormGroup)
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {
      this._userdataService.changeUser(this.parentFormGroup.value.user, this.parentFormGroup.getRawValue().addresses);
      this._router.navigate(['/users']);
    }
  }
}
