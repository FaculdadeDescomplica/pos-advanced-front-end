import { TestBed } from '@angular/core/testing';

import { AutorizadoGuard } from './autorizado.guard';

describe('AutorizadoGuard', () => {
  let guard: AutorizadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorizadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
