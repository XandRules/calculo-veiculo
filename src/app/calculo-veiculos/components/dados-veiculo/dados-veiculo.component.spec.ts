import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosVeiculoComponent } from './dados-veiculo.component';

describe('DadosVeiculoComponent', () => {
  let component: DadosVeiculoComponent;
  let fixture: ComponentFixture<DadosVeiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DadosVeiculoComponent]
    });
    fixture = TestBed.createComponent(DadosVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
