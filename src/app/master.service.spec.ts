import { TestBed } from '@angular/core/testing';
   //TestBed → Angular’s testing module that helps configure and initialize dependencies for tests.

import { MasterService } from './master.service';//MasterService → The service being tested.


describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
