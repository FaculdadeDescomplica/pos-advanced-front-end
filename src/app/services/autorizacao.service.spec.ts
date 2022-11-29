import { TestBed } from '@angular/core/testing';

import { AutorizacaoService } from './autorizacao.service';

describe('AutorizacaoService', () => {
  let service: AutorizacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutorizacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
