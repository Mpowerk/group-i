import { TestBed } from '@angular/core/testing';

import { UpdateDocService } from './update-doc.service';

describe('UpdateDocService', () => {
  let service: UpdateDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
