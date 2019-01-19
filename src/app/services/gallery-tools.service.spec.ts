import { TestBed } from '@angular/core/testing';

import { GalleryToolsService } from './gallery-tools.service';

describe('GalleryToolsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GalleryToolsService = TestBed.get(GalleryToolsService);
    expect(service).toBeTruthy();
  });
});
