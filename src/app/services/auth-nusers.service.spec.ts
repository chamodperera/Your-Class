import { TestBed } from '@angular/core/testing';

import { AuthNusersService } from './auth-nusers.service';

describe('AuthNusersService', () => {
  let service: AuthNusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthNusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
