import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { LoginAutenticaModel } from './login-autentica.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http: HttpClient;
  private headers: any;
  private jwtHelper: JwtHelperService;

  constructor(private router: Router, private httpBackEnd: HttpBackend) {
    this.http = new HttpClient(httpBackEnd);
    this.jwtHelper = new JwtHelperService();
  }

  redirecionaSiteInstitucional() {
    window.location.href = environment.api;
    //precisa mandar para o link do site institucional
  }

  atualizaAutenticacao(refreshToken: string, accessToken: string) {
    const objrefresh =
      'grant_type=refresh_token&client_id=fature_client&refresh_token=' +
      refreshToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(
      environment.api,
      { data: objrefresh },
      { headers: headers }
    );
  }

  autenticar(loginAutenticaModel: LoginAutenticaModel) {
    const login = {
      login: loginAutenticaModel.username,
      senha: loginAutenticaModel.password,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(environment.api + 'login', login, {
      headers: headers,
    });
  }

  autenticado() {
    return true;
    // const accessToken = localStorage.getItem('access_token');
    // //const refreshToken = localStorage.getItem('conf_gestao_refresh_token');
    // const accessTokenEstaExpirado =  this.jwtHelper.isTokenExpired(accessToken);
    // //const refreshTokenEstaExpirado = this.jwtHelper.isTokenExpired(refreshToken);

    // //if (accessTokenEstaExpirado || refreshTokenEstaExpirado) {
    // if (accessTokenEstaExpirado) {
    //     return false;
    // } else {
    //     return true;
    // }
  }

  autenticaUsuario() {
    localStorage.setItem('autenticado', 'true');
  }

  // sair() {
  //     var headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
  //     return this.http.delete(environment.urlAutenticacao, {headers: headers});
  // }

  sair() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('autenticado');
    localStorage.removeItem('username');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_role');
  }

  limpaLocalStorage() {
    localStorage.clear();
  }

  usuarioEstaAutenticado() {
    const autenticado = localStorage.getItem('autenticado') == 'true';

    return autenticado;
  }

  recuperaModulo() {
    return localStorage.getItem('conf_gestao_modulo');
  }
}
