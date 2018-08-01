import { TestBed, inject } from '@angular/core/testing';

import { TestandoService } from './testando.service';

describe('TestandoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestandoService]
    });
  });

  it('should be created', inject([TestandoService], (service: TestandoService) => {
    expect(service).toBeTruthy();
  }));
});
