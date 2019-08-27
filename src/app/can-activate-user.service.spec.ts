import { TestBed } from '@angular/core/testing';

import { CanActivateUserService } from './can-activate-user.service';

describe('CanActivateUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateUserService = TestBed.get(CanActivateUserService);
    expect(service).toBeTruthy();
  });
});
