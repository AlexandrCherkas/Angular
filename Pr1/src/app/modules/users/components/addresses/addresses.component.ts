import { IfStmt } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { IUser } from '../../interface/user';
import {  takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss'],
})
export class AddressesComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() currentUser: Observable<IUser | undefined>;
  @Input() key: string;
  @Output() userAddresses = new EventEmitter<FormArray>();

  addressesFormsArray: FormArray;
  private componentArtive  = true

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressesFormsArray = this.fb.array([this.createAddressesGroup()]);

    if (this.currentUser) {
      this.currentUser
        .pipe(takeWhile(() => this.componentArtive))
        .subscribe((data) => {
          if (data?.['address']) {
            for (let i = 1; i < data?.['address'].length; i++) {
              this.addAddress();
            }
            this.addressesFormsArray.patchValue(data?.['address']);
          }
      });
    }
    this.userAddresses.emit(this.addressesFormsArray);
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

  ngOnDestroy():void{
    this.componentArtive = false
  }
}
