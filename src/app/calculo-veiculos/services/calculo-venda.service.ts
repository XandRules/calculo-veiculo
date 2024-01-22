import { Injectable } from '@angular/core';

interface CalculoVeiculo {
  mensagem: string;
  percentual: number;
}

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

    const valorPercentual = ((valorUsuario - valorFipe) / valorFipe) * 100;

    return this.verificarPercentual(valorPercentual);

  }

  private verificarPercentual(valorCalculadoVendaPelaFipe: number): CalculoVeiculo{


    let mensagem = MensagemEnum.valorMedio;

    if(valorCalculadoVendaPelaFipe >= 10){
      mensagem = MensagemEnum.valorAcima
    }else if(valorCalculadoVendaPelaFipe <= 10){
      mensagem = MensagemEnum.valorAbaixo
    }

    return {
      mensagem: mensagem,
      percentual: valorCalculadoVendaPelaFipe
    };

  }
}
