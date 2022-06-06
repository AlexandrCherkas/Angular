import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { zip } from 'rxjs';
import { ValidateEmail } from 'src/app/modules/shared/validators/checkDomenEmail';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-addresses-component',
  templateUrl: './addresses-component.component.html',
  styleUrls: ['./addresses-component.component.scss'],
})
export class AddressesComponentComponent implements OnInit {
  @Input() formGroup: FormGroup

  dynamicForm: FormGroup;

  fooRequired:boolean = true

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      address: this.fb.array([this.createAddressesGroup()]),
    });

    this.formGroup.addControl('addresses', this.dynamicForm )
  }


  createAddressesGroup() {
    return this.fb.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [''],
    });
  }

  addAddress() {
    this.addressesFormArray.push(this.createAddressesGroup());
    console.log(this.addressesFormArray.controls[0].get('city')?.hasError('required'))
  }

  removeAddress(index: number) {
    this.addressesFormArray.removeAt(index);
  }

  get addressesFormArray() {
    return <FormArray>this.dynamicForm.get('address');
  }


  changeValidators(index: number) {
    let input: any = this.addressesFormArray.controls[index].get('city')
    if (this.fooRequired) {
      console.log('rgrg')
      input.setValidators([Validators.required]);
    } else {
      input.setValidators(null);
    }

    input.updateValueAndValidity();
    this.fooRequired = !this.fooRequired;
  }
}

