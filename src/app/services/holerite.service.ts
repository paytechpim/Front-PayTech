import { Injectable } from '@angular/core';
import { ExecutaHttpService } from './executa-http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class HoleriteService {

  constructor(private http: ExecutaHttpService) { }

  public gerarHolerite(id_funcionario: any, data_competencia: any, porcentagem_horas_extra: any, valorValeTransporte: any, horas_faltas: any, horas_extra: any): Observable<any>{
    valorValeTransporte = valorValeTransporte == null || valorValeTransporte == '' ? 0 : valorValeTransporte;
    
    var url = environment.api + 'api/Holerite/' +
    "GerarHolerite?" + 
    "idFuncionario=" + id_funcionario +
    "&dataCalculoSalarioMensal=" + data_competencia.toJSON() + 
    "&percentualHoraExtra=" + porcentagem_horas_extra + 
    "&valorValeTransporte=" + valorValeTransporte + 
    "&faltas=" + horas_faltas +
    "&horaExtra=" + horas_extra;

    return this.http.executarURLPOST(url, "");
  }
}
