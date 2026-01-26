import { TestBed } from '@angular/core/testing';

import { BD } from './bd';

describe('BD', () => {
  let service: BD;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BD);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
