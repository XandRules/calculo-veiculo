import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FipeService } from '../../services/fipe.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dados-veiculo',
  templateUrl: './dados-veiculo.component.html',
  styleUrls: ['./dados-veiculo.component.scss']
})
export class DadosVeiculoComponent {

  public formVeiculo: FormGroup;
  public marcas: any[] = [];
  public modelos: any[] = [];
  public anoFabricacao: any[] = [];
  public dadosDoVeiculo: any = null;

  constructor(
     private formBuilder: FormBuilder,
     private fipeService: FipeService
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

  get anoFabricaoForm() {
    return this.formVeiculo.controls['anoVeiculo'].getRawValue();
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

  pesquisar(){
    this.fipeService.getPrecoVeiculo(this.tipoVeiculoForm, this.marcaVeiculoForm, this.modeloVeiculoForm, this.anoFabricaoForm)
    .subscribe((resposta) => this.dadosDoVeiculo = resposta)
  }

}
