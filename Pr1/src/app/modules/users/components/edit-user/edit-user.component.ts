import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IUser } from '../../interface/user';
import { UserdataService } from '../../services/userdata.service';
import { FormArray, FormGroup, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],

})
export class EditUserComponent implements OnInit  {

  parentFormGroup: FormGroup = new FormGroup({});
  formGroup: FormGroup
  id: any;
  user$: Observable <IUser>;

  constructor(
    private route: ActivatedRoute,
    private userdataService: UserdataService,
    private router: Router) {  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.user$ = this.userdataService.getUserByID(this.id)
  }

  onChengeUser(key: string, Form: FormArray | FormGroup): void{
    this.parentFormGroup.addControl(key, Form)
  }

  canDeactivateMetod(): Observable<boolean> | boolean {
    return this.parentFormGroup.dirty
  }

  editUser(): void{
    this.parentFormGroup.markAllAsTouched();

    if (this.parentFormGroup.status == 'VALID') {
      this.parentFormGroup.markAsPristine();
      this.userdataService.changeUser(this.parentFormGroup.value.user, this.parentFormGroup.getRawValue().address);
      this.router.navigate(['/users']);
    }
  }
}
