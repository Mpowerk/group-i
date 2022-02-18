import { TestBed } from '@angular/core/testing';

import { AddDrAuthenService } from './add-dr-authen.service';

describe('AddDrAuthenService', () => {
  let service: AddDrAuthenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDrAuthenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
