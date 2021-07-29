import { TestBed } from '@angular/core/testing';

import { ExploreExamService } from './explore-exam.service';

describe('ExploreExamService', () => {
  let service: ExploreExamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExploreExamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
