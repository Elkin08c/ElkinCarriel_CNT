import { TestBed } from '@angular/core/testing';

import { CntService } from './cnt.service';

describe('CntService', () => {
  let service: CntService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CntService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
