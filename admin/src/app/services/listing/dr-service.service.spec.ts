import { TestBed } from '@angular/core/testing';

import { DrServiceService } from './dr-service.service';

describe('DrServiceService', () => {
  let service: DrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
