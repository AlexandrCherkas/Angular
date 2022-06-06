import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesComponentComponent } from './addresses-component.component';

describe('AddressesComponentComponent', () => {
  let component: AddressesComponentComponent;
  let fixture: ComponentFixture<AddressesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
