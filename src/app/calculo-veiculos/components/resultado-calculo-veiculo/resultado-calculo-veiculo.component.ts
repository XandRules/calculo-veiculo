import { Component, Input } from '@angular/core';
import { Veiculo } from '../../models/veiculo.model';
import { CalculoVeiculo } from '../../models/calculo-venda.model';

@Component({
  selector: 'app-resultado-calculo-veiculo',
  templateUrl: './resultado-calculo-veiculo.component.html',
  styleUrls: ['./resultado-calculo-veiculo.component.scss']
})
export class ResultadoCalculoVeiculoComponent {

  @Input() dados!: Veiculo;
  @Input() dadosVendaUsuario!: CalculoVeiculo;

}
