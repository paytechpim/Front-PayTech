import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecutaHttpService } from './executa-http.service';
import { environment } from '@env/environment';
import { colaborador } from '@app/models/colaborador.models';

@Injectable({
  providedIn: 'root'
})
export class colaboradorService {

    constructor(private http: ExecutaHttpService) { }

    public buscarColaborador(id: number): Observable<any>{
        var url = environment.api + 'api/Funcionario/GetById' + '?id=' + id;

        return this.http.executarURLGet(url);
    }

    public buscarColaboradorPorParametro(tipo: string = "", palavraChave: string = ""): Observable<any>{
        var url: string = "";

        if(tipo.toLocaleLowerCase() == "ID".toLocaleLowerCase()){
            url = environment.api + 'api/Funcionario/GetById' + '?id=' + palavraChave;
        }else if(tipo.toLocaleLowerCase() == "Nome".toLocaleLowerCase()){
            url = environment.api + 'api/Funcionario/GetByName' + '?nome=' + palavraChave;
        }else if(tipo.toLocaleLowerCase() == "CPF".toLocaleLowerCase()){

        }

        return this.http.executarURLGet(url);
    }

    public deleteColaborador(id: number): Observable<any>{
        var url = environment.api + 'api/Funcionario/Delete' + '?id=' + id;

        return this.http.executarURLDELETE(url);
    }
  
    public inserirColaborador(colaborador: any): Observable<any>{
        var url = environment.api + 'api/Funcionario/Insert';

        colaborador.id = colaborador.id == null || colaborador.id == '' ? 0 : colaborador.id;
        colaborador.informacoesTrabalhistas.id = colaborador.informacoesTrabalhistas.id == null || colaborador.informacoesTrabalhistas.id == '' ? 0 : colaborador.informacoesTrabalhistas.id;
        colaborador.informacoesTrabalhistas.salario_Bruto = colaborador.informacoesTrabalhistas.salario_Bruto == null || colaborador.informacoesTrabalhistas.salario_Bruto == '' ? 0 : colaborador.informacoesTrabalhistas.salario_Bruto;
        colaborador.endereco.numero = colaborador.endereco.numero == null || colaborador.endereco.numero == '' ? 0 : colaborador.endereco.numero;
        
        return this.http.executarURLPOST(url, colaborador);
    }

    public atualizaColaborador(colaborador: any): Observable<any>{
        var url = environment.api + 'api/Funcionario/Update';

        colaborador.salario = colaborador.salario == null || colaborador.salario == '' ? 0 : colaborador.salario;
        colaborador.endereco.numero = colaborador.endereco.numero == null || colaborador.endereco.numero == '' ? 0 : colaborador.endereco.numero;
       
        return this.http.executarURLPUT(url, colaborador);
    }
}