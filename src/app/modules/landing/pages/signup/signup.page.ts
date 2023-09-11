import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/authentication/auth.service';
import { LoginAutenticaModel } from '@app/models/login-autentica.model';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  usuario: string;
  senha: string = "";
  loginAutenticaModel: LoginAutenticaModel;
  tituloModalMensagemErro: string = "";
  carregando: boolean = false;
  exibirModalDeErro: boolean = false;
  telaPrincipal = "admin";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.autenticado()){
      this.router.navigateByUrl('/' + this.telaPrincipal);
    }
  }

  open(){
    this.loginAutenticaModel = new LoginAutenticaModel(this.usuario, this.senha);

    this.carregando = true;
    this.authService.autenticar(this.loginAutenticaModel).subscribe(retorno => {
      this.sucesso(retorno);
    }, retornoError => {
      this.falha(retornoError);
    });
  }

  private sucesso(retorno: any) {
    this.obtemDadosRetorno(retorno);
    this.router.navigateByUrl('/' + this.telaPrincipal);
  }

  private obtemDadosRetorno(retorno: any) {
    localStorage.setItem('access_token', retorno.token);
    localStorage.setItem('refresh_token', retorno.refreshToken);
    localStorage.setItem('tipo_usuario', retorno.user.tipo);
    localStorage.setItem('id_login', retorno.user.id);
    localStorage.setItem('id_funcionario', retorno.user.id_Funcionario);
    localStorage.setItem('nome_usuario', retorno.user.nome_Usuario);
  }

  private falha(retorno: any) {
    this.selecionaTituloErro(retorno);
    this.mostrarModalDeErro();
    this.carregando = false;
  }

  private selecionaTituloErro(retorno: any) {
    if (retorno.status === 0) {
        this.tituloModalMensagemErro = 'Falha de conexão. Tente novamente mais tarde';
    } else if (retorno.status === 500) {
        this.tituloModalMensagemErro = 'Ocorreu um erro. Tente novamente mais tarde';
    } else {
      if(retorno.error.message.toString().length > 0){
        this.tituloModalMensagemErro = retorno.error.message;
      }else{
        this.tituloModalMensagemErro = 'Usuário ou senha inválidos';
      }
    }
  }

  private mostrarModalDeErro() {
    this.exibirModalDeErro = true;
  }

}
