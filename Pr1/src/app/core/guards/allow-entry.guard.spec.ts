import { TestBed } from '@angular/core/testing';

import { AllowEntryGuard } from './allow-entry.guard';

describe('AllowEntryGuard', () => {
  let guard: AllowEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AllowEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
