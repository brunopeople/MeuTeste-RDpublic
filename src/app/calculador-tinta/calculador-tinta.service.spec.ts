import { TestBed } from '@angular/core/testing';

import { CalculadorTintaService } from './calculador-tinta.service';

describe('CalculadorTintaService', () => {
  let service: CalculadorTintaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadorTintaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
