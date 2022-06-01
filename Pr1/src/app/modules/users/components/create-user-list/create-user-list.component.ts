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
    email:['', Validators.email],
    company: ['',Validators.required],
    departament: ['',Validators.required],
    age: ['', [Validators.required, Validators.min(15),Validators.max(100)]],
    gender: ['',Validators.required],
    imageUrl: 'http://s1.iconbird.com/ico/2013/6/382/w256h2561372594116ManRed2.png'
  })

  get name() {
    return this.childFormGroup.get('name');
  }

  childFormGroup: FormGroup = this.formFields


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    console.log(this.childFormGroup.get('name'))
    this.formGroup.addControl('user', this.childFormGroup)
  }

}
