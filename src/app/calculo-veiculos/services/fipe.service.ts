import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FipeService {

  pathUrl = 'https://parallelum.com.br/fipe/api/v1/';

  constructor(private http: HttpClient) { }


  getVeiculos(tipoVeiculo: string): Observable<any>{
    return this.http.get<any>(`${this.pathUrl}${tipoVeiculo}/marcas`)
  }

  getMarcas(tipoVeiculo: string, codigoMarca: number): Observable<any>{

    return this.http.get<any>(`${this.pathUrl}${tipoVeiculo}/marcas/${codigoMarca}/modelos`);

  } 

  getAnoFabricacao(tipoVeiculo: string, codigoMarca: number, modeloVeiculo: number): Observable<any>{

    return this.http.get<any>(`${this.pathUrl}${tipoVeiculo}/marcas/${codigoMarca}/modelos/${modeloVeiculo}/anos`);
  }

  getPrecoVeiculo(tipoVeiculo: string, codigoMarca: number, modeloVeiculo: number, anoFabricacao: number): Observable<any>{

    return this.http.get<any>(`${this.pathUrl}${tipoVeiculo}/marcas/${codigoMarca}/modelos/${modeloVeiculo}/anos/${anoFabricacao}`);
  }

}
