import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IUser } from '../../interface/user';
import { UserdataService } from '../../services/userdata.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  parentFormGroup: FormGroup = new FormGroup({});

  id: any | null;
  user: IUser | undefined

  constructor(
    private route: ActivatedRoute,
    private _userdataService: UserdataService,
    private _router: Router ) {  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    this.user = this._userdataService.getUserByID(this.id)

  }
  editUser(): void{
    console.log(this.parentFormGroup)
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {
      this._userdataService.changeUser(this.parentFormGroup.value.user, this.parentFormGroup.value.addresses);
      this._router.navigate(['/users']);
    }
  }
}
