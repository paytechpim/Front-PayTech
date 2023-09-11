import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAutenticaModel } from '@app/models/login-autentica.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

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
    this.router.navigateByUrl('/');
    //precisa mandar para o link do site institucional
  }

  atualizaAutenticacao(accessToken: string, refreshToken: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const URL = environment.api + 'api/Login/refresh?token' + accessToken + "&refreshToken=" + refreshToken;
    return this.http.post(URL, {
      headers: headers,
    });
  }

  autenticar(loginAutenticaModel: LoginAutenticaModel) {
    const login = {
      nome_Usuario: loginAutenticaModel.nome_Usuario,
      senha: loginAutenticaModel.senha,
    };

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(environment.api + 'api/Login/autenticar', login, {
      headers: headers,
    });
  }

  autenticado() {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const accessTokenEstaExpirado =  this.jwtHelper.isTokenExpired(accessToken);

    return !accessTokenEstaExpirado;
  }

  sair() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('tipo_usuario');
    localStorage.removeItem('id_login');
    localStorage.removeItem('id_funcionario');
    localStorage.removeItem('nome_usuario');

    // var headers = new HttpHeaders({ 'Authorization': `Bearer ${localStorage.getItem('access_token')}`});
    // return this.http.delete(environment.api, {headers: headers});
  }

  limpaLocalStorage() {
    localStorage.clear();
  }

  usuarioEstaAutenticado() {
    const autenticado = localStorage.getItem('autenticado') == 'true';

    return autenticado;
  }
}
