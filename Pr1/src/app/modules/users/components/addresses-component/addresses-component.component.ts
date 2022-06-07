import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { zip } from 'rxjs';
import { ValidateEmail } from 'src/app/modules/shared/validators/checkDomenEmail';

@Component({
  selector: 'app-addresses-component',
  templateUrl: './addresses-component.component.html',
  styleUrls: ['./addresses-component.component.scss'],
})
export class AddressesComponentComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() isValid: boolean

  dynamicForm: FormGroup;
  toggle: boolean = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dynamicForm = this.fb.group({
      address: this.fb.array([this.createAddressesGroup()]),
    });

    this.formGroup.addControl('addresses', this.dynamicForm);
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
    this.addressesFormArray.push(this.createAddressesGroup());
    console.log(this.isValid,
      this.addressesFormArray.controls[0].get('addressLine')?.invalid,
      this.addressesFormArray.controls[0].get('addressLine')?.hasError('required')
    );
  }

  removeAddress(index: number) {
    this.addressesFormArray.removeAt(index);
  }

  get addressesFormArray() {
    return <FormArray>this.dynamicForm.get('address');
  }

  enableInput(index: number) {
    let inputZip: any = this.addressesFormArray.controls[index].get('zip');
    if(this.addressesFormArray.controls[index].get('city')?.value){
      inputZip.setValidators([Validators.required]);
      inputZip.enable();
    } else {
      inputZip.setValidators(null);
      inputZip.disable();
    }
    inputZip.updateValueAndValidity();

  }
}
