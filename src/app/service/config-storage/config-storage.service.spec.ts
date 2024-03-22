import { TestBed } from '@angular/core/testing';

import { ConfigStorageService } from './config-storage.service';

describe('ConfigStorageService', () => {
  let service: ConfigStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
