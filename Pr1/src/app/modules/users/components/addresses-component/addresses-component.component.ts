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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      address: this.fb.array([this.createAddressesGroup()]),
    });

    this.formGroup.addControl('addresses', this.dynamicForm )
  }

  createAddressesGroup() {
    return this.fb.group({
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    });
  }

  addAddress() {
    this.addressesFormArray.push(this.createAddressesGroup());
  }

  removeAddress(index: number) {
    this.addressesFormArray.removeAt(index);
  }

  get addressesFormArray() {
    console.log(<FormArray>this.dynamicForm.get('address'))
    return <FormArray>this.dynamicForm.get('address');
  }
}

