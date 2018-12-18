import { TestBed } from '@angular/core/testing';

import { ArrayToolsService } from './array-tools.service';

describe('ArrayToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrayToolsService = TestBed.get(ArrayToolsService);
    expect(service).toBeTruthy();
  });
});
