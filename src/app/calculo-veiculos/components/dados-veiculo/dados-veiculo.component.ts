import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FipeService } from '../../services/fipe.service';
import { filter } from 'rxjs';
import { CalculoVendaService } from '../../services/calculo-venda.service';
import { Veiculo } from '../../models/veiculo.model';
import { CalculoVeiculo } from '../../models/calculo-venda.model';

@Component({
  selector: 'app-dados-veiculo',
  templateUrl: './dados-veiculo.component.html',
  styleUrls: ['./dados-veiculo.component.scss'],

  
})
export class DadosVeiculoComponent {

  public formVeiculo: FormGroup;
  public marcas: any[] = [];
  public modelos: any[] = [];
  public anoFabricacao: any[] = [];
  public dadosDoVeiculo!: Veiculo;
  dadosCalculados!: CalculoVeiculo;

  constructor(
     private formBuilder: FormBuilder,
     private fipeService: FipeService,
     private calculoVendaService: CalculoVendaService
    ){
    this.formVeiculo = this.formBuilder.group({
      tipoVeiculo: new FormControl('', [Validators.required]),
      marcaVeiculo: new FormControl('', [Validators.required]),
      modeloVeiculo: new FormControl('', [Validators.required]),
      anoVeiculo: new FormControl('', [Validators.required]),
      valorVeiculo: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(){
   this.buscaMarcas();
   this.buscaModelos();
   this.buscaAnoFabricacao();
   this.buscaInformacoesVeiculo();
  }

  get tipoVeiculoForm() {
    return this.formVeiculo.controls['tipoVeiculo'].getRawValue();
  }

  get marcaVeiculoForm() {
    return this.formVeiculo.controls['marcaVeiculo'].getRawValue();
  }

  get modeloVeiculoForm() {
    return this.formVeiculo.controls['modeloVeiculo'].getRawValue();
  }

  get valorVeiculoUsuario() {
    return this.formVeiculo.controls['valorVeiculo'].getRawValue();
  }

  buscaMarcas(){
    this.formVeiculo.controls['tipoVeiculo'].valueChanges.pipe(
      filter((value) => value !== null)
    )
    .subscribe((value) => {
      this.fipeService.getVeiculos(value).subscribe((marcas) => this.marcas = marcas)
    });
  }

  buscaModelos(){

    this.formVeiculo.controls['marcaVeiculo'].valueChanges.pipe(
      filter((marcaVeiculo) => marcaVeiculo !== null)
    )
    .subscribe((marcaVeiculo) => {
      this.fipeService.getMarcas(this.tipoVeiculoForm, marcaVeiculo).subscribe((modelos) => this.modelos = modelos.modelos)
    });
  }

  buscaAnoFabricacao(){

    this.formVeiculo.controls['modeloVeiculo'].valueChanges.pipe(
      filter((modeloVeiculo) => modeloVeiculo !== null)
    )
    .subscribe((modeloVeiculo) => {
      this.fipeService.getAnoFabricacao(this.tipoVeiculoForm, this.marcaVeiculoForm, modeloVeiculo).subscribe((ano) => this.anoFabricacao = ano)
    });
  }

  buscaInformacoesVeiculo(){

    this.formVeiculo.controls['anoVeiculo'].valueChanges.pipe(
      filter((anoFabricacao) => anoFabricacao !== null)
    )
    .subscribe((anoFabricacao) => {
      this.fipeService.getPrecoVeiculo(this.tipoVeiculoForm, this.marcaVeiculoForm, this.modeloVeiculoForm, anoFabricacao)
    .subscribe((resposta) => this.dadosDoVeiculo = resposta)
    });
  }



  pesquisar(){
   const dadosCalculo = this.calculoVendaService.calcularVendaVeiculo(this.valorVeiculoUsuario, this.formatarValorFipe());

   this.dadosCalculados = dadosCalculo;
  }

  private formatarValorFipe(){
    const valorFipe = this.dadosDoVeiculo.Valor.replace('R$','').trim().replaceAll('.','').split(',');

    return +valorFipe[0];
  }

}
