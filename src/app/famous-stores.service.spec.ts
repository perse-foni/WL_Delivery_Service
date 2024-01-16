import { TestBed } from '@angular/core/testing';

import { FamousStoresService } from './services/famous-stores.service';

describe('FamousStoresService', () => {
  let service: FamousStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamousStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
