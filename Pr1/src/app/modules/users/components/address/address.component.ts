import { Component, Input, OnInit } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() address: FormGroup | any

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  enableInput() {
    const inputZip: FormControl = this.address.get('zip');
    const inputCity: FormControl = this.address.get('city')

    if(inputCity?.value){
      inputZip.setValidators([Validators.required]);
      inputZip.enable();
    } else {
      inputZip.disable();
    }
    inputZip.updateValueAndValidity();
  }

}
