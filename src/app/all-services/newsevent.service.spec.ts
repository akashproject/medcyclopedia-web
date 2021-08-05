import { TestBed } from '@angular/core/testing';

import { NewseventService } from './newsevent.service';

describe('NewseventService', () => {
  let service: NewseventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewseventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
