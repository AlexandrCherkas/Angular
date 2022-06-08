import { Component, OnInit, Input } from '@angular/core';
import {  FormGroup,  FormControl,  FormBuilder,  Validators,  FormArray,} from '@angular/forms';
import { zip } from 'rxjs';
import { ValidateEmail } from 'src/app/modules/shared/validators/checkDomenEmail';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {
  @Input() formGroup: FormGroup;

  addressesFormsArray = this.fb.array([
    this.createAddressesGroup()
  ])

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup.addControl('addresses', this.addressesFormsArray)
  }


  createAddressesGroup() {
    return this.fb.group({
      addressLine: ['', Validators.required],
      city: [''],
      zip: [
        {
          value: null,
          disabled: true,
        },
      ],
    });
  }

  addAddress() {
    this.addressesFormsArray.push(this.createAddressesGroup());
  }

  removeAddress(index: number) {
    this.addressesFormsArray.removeAt(index);
  }

}
