import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosVeiculoComponent } from './components/dados-veiculo/dados-veiculo.component';

const routes: Routes = [
  { path: '', component: DadosVeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculoVeiculosRoutingModule { }
