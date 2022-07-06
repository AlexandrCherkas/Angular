import { TestBed } from '@angular/core/testing';

import { DataRoutingService } from './data-routing.service';

describe('DataRoutingService', () => {
  let service: DataRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
