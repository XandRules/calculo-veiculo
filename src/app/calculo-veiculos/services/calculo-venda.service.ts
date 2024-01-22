import { Injectable } from '@angular/core';
import { CalculoVeiculo } from '../models/calculo-venda.model';



enum MensagemEnum {
  'valorMedio' = 'Valor do veículo na média da tabela FIPE',
  'valorAcima' =  'Valor do veículo acima da tabela FIPE',
  'valorAbaixo' =  'Valor do veículo na média da tabela FIPE'
}

@Injectable({
  providedIn: 'root'
})
export class CalculoVendaService {

  constructor() { }

  calcularVendaVeiculo(valorUsuario: number, valorFipe: number): CalculoVeiculo {

    const valorPercentual = (((valorUsuario - valorFipe) / valorFipe) * 100).toPrecision(2);

    return this.verificarPercentual(+valorPercentual, valorUsuario);

  }

  private verificarPercentual(valorCalculadoVendaPelaFipe: number, valorUsuario: number): CalculoVeiculo{


    let mensagem = MensagemEnum.valorMedio;

    if(valorCalculadoVendaPelaFipe >= 10){
      mensagem = MensagemEnum.valorAcima
    }else if(valorCalculadoVendaPelaFipe <= 10){
      mensagem = MensagemEnum.valorAbaixo
    }

    return {
      mensagem: mensagem,
      percentual: valorCalculadoVendaPelaFipe,
      valorUsuario : valorUsuario,
    };

  }
}
