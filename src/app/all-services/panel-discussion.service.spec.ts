import { TestBed } from '@angular/core/testing';

import { PanelDiscussionService } from './panel-discussion.service';

describe('PanelDiscussionService', () => {
  let service: PanelDiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanelDiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
