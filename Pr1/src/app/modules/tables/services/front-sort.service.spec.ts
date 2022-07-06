import { TestBed } from '@angular/core/testing';

import { FrontSortService } from './front-sort.service';

describe('FrontSortService', () => {
  let service: FrontSortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontSortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
