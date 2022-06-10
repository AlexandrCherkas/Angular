import { TestBed } from '@angular/core/testing';

import { ExitEditUserFormGuard } from './exit-edit-user-form.guard';

describe('ExitEditUserFormGuard', () => {
  let guard: ExitEditUserFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExitEditUserFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
