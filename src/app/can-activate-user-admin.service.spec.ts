import { TestBed } from '@angular/core/testing';

import { CanActivateUserAdminService } from './can-activate-user-admin.service';

describe('CanActivateUserAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateUserAdminService = TestBed.get(CanActivateUserAdminService);
    expect(service).toBeTruthy();
  });
});
