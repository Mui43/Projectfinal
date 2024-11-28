import { TestBed } from '@angular/core/testing';

import { DatabasekruapalaiService } from './databasekruapalai.service';

describe('DatabasekruapalaiService', () => {
  let service: DatabasekruapalaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabasekruapalaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
