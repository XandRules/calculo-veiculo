import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculoVeiculosRoutingModule } from './calculo-veiculos-routing.module';
import { DadosVeiculoComponent } from './components/dados-veiculo/dados-veiculo.component';
import { ResultadoCalculoVeiculoComponent } from './components/resultado-calculo-veiculo/resultado-calculo-veiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DadosVeiculoComponent,
    ResultadoCalculoVeiculoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalculoVeiculosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CalculoVeiculosModule { }
