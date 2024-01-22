import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoCalculoVeiculoComponent } from './resultado-calculo-veiculo.component';

describe('ResultadoCalculoVeiculoComponent', () => {
  let component: ResultadoCalculoVeiculoComponent;
  let fixture: ComponentFixture<ResultadoCalculoVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadoCalculoVeiculoComponent]
    });
    fixture = TestBed.createComponent(ResultadoCalculoVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
