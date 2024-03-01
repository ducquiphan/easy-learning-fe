import { TestBed } from '@angular/core/testing';

import { ResultItemService } from './result-item.service';

describe('ResultItemService', () => {
  let service: ResultItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
