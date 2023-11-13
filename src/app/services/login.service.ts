import { Injectable } from '@angular/core';
import { ExecutaHttpService } from './executa-http.service';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: ExecutaHttpService) { }

  public buscarLoginPorFuncionario(id_funcionario: number): Observable<any>{
    var url = environment.api + 'api/Login/GetByFuncionario' + '?id_funcionario=' + id_funcionario;

    return this.http.executarURLGet(url);
  }

  public nomeUsuarioExistente(nome_usuario: string): Observable<any>{
    var url = environment.api + 'api/Login/IsUserNameExist' + '?username=' + nome_usuario;

    return this.http.executarURLGet(url);
  }

  public inserirLogin(login: any): Observable<any>{
    var url = environment.api + 'api/Login';

    login.id = login.id ?? 0;
    login.data_Cadastro = null;
    login.Data_ultima_alteracao_senha = null;
    
    return this.http.executarURLPOST(url, login);
  }

  public atualizaLogin(login: any): Observable<any>{
    var url = environment.api + 'api/Login/Update';

    return this.http.executarURLPUT(url, login);
  } 
}
