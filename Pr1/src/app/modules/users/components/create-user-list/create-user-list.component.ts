import {trigger,  state,  style,  animate,  transition} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-list',
  templateUrl: './create-user-list.component.html',
  styleUrls: ['./create-user-list.component.scss']
})
export class CreateUserListComponent implements OnInit {

  @Input() formGroup: FormGroup;

  public createID(): number{
    return Math.floor(Math.random() * 1000000);
  }


  formFields = this.fb.group({
    id: this.createID(),
    name: ['',Validators.required],
    secondName: ['',Validators.required],
    email:['', [Validators.required, Validators.email]],
    company: ['',[Validators.required, Validators.maxLength(35)]],
    departament: ['',[Validators.required, Validators.minLength(6)]],
    age: ['', [Validators.required, Validators.min(15),Validators.max(100)]],
    gender: ['',Validators.required],
    imageUrl: 'http://s1.iconbird.com/ico/2013/6/382/w256h2561372594116ManRed2.png'
  })



  childFormGroup: FormGroup = this.formFields


  constructor(private fb: FormBuilder) {  }

  ngOnInit(): void {
    this.formGroup.addControl('user', this.childFormGroup)
  }


}
