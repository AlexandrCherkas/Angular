import { TestBed } from '@angular/core/testing';

import { SelectedEntitiesService } from './selected-entities.service';

describe('SelectedEntitiesService', () => {
  let service: SelectedEntitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedEntitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
