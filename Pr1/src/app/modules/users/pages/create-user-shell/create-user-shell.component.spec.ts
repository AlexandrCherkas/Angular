import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserShellComponent } from './create-user-shell.component';

describe('CreateUserShellComponent', () => {
  let component: CreateUserShellComponent;
  let fixture: ComponentFixture<CreateUserShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
