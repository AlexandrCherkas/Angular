import { TestBed } from '@angular/core/testing';

import { LeaveEditUserFormGuard } from './leave-edit-user-form.guard';

describe('LeaveEditUserFormGuard', () => {
  let guard: LeaveEditUserFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LeaveEditUserFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
