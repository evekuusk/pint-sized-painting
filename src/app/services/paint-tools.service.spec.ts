import { TestBed } from '@angular/core/testing';

import { PaintToolsService } from './paint-tools.service';

describe('PaintToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaintToolsService = TestBed.get(PaintToolsService);
    expect(service).toBeTruthy();
  });
});
