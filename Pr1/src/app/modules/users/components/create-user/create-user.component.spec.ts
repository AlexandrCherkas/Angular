import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserListComponent } from './create-user.component';

describe('CreateUserListComponent', () => {
  let component: CreateUserListComponent;
  let fixture: ComponentFixture<CreateUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
