import { TestBed } from '@angular/core/testing';

import { AmazingWriterLibraryService } from './amazing-writer-library.service';

describe('AmazingWriterLibraryService', () => {
  let service: AmazingWriterLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazingWriterLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
