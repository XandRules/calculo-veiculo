import { TestBed } from '@angular/core/testing';

import { CalculoVendaService } from './calculo-venda.service';

describe('CalculoVendaService', () => {
  let service: CalculoVendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoVendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
