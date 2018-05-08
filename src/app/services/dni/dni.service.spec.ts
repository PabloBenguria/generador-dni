import { TestBed, inject } from '@angular/core/testing';

import { DniService } from './dni.service';

describe('DniService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DniService]
    });
  });

  it('should be created', inject([DniService], (service: DniService) => {
    expect(service).toBeTruthy();
  }));
});
