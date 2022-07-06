import { TestBed } from '@angular/core/testing';

import { BackSortService } from './back-sort.service';

describe('BackSortService', () => {
  let service: BackSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
