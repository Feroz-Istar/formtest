import { TestBed, inject } from '@angular/core/testing';

import { LoggerserviceService } from './loggerservice.service';

describe('LoggerserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerserviceService]
    });
  });

  it('should be created', inject([LoggerserviceService], (service: LoggerserviceService) => {
    expect(service).toBeTruthy();
  }));
});
