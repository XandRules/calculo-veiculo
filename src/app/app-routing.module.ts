import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calculo-fipe', pathMatch: 'full'},
  { 
    path: 'calculo-fipe',
    loadChildren: () => import('./calculo-veiculos/calculo-veiculos.module').then(m => m.CalculoVeiculosModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
