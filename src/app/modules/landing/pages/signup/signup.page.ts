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
  descricaoModalMensagemErro: string = "";
  carregando: boolean = false;
  exibirModalDeErro: boolean = false;
  telaPrincipal = "dashboard";

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // if(this.authService.autenticado()){
    //   this.router.navigateByUrl('/' + this.telaPrincipal);
    // }

    this.tituloModalMensagemErro = "Usuário ou senha invalido";
  }

  open(){
      this.loginAutenticaModel = new LoginAutenticaModel(this.usuario, this.senha);

      this.carregando = true;
      this.authService.autenticar(this.loginAutenticaModel).subscribe(retorno => {
        debugger;
        this.processaRetorno(retorno);
      }, retornoError => {
          debugger;
          this.processaRetorno(retornoError);
      });
  }

  private processaRetorno(retorno: any) {
    if (retorno.isValido) {
      this.sucesso(retorno);
    } else {
      this.falha(retorno);
    }
  }

  private sucesso(retorno: any) {
    this.obtemDadosRetorno(retorno);
    //this.authService.autenticaUsuario();
    this.router.navigateByUrl('/' + this.telaPrincipal);
  }

  private obtemDadosRetorno(retorno: any) {
    localStorage.setItem('access_token', retorno.entity);
    
  }

  private falha(retorno: any) {
    this.selecionaTituloErro(retorno.status);
    this.mostrarModalDeErro();
    this.carregando = false;
  }

  private selecionaTituloErro(status: number) {
    if (status === 0) {
        this.tituloModalMensagemErro = 'Falha de conexão. Tente novamente mais tarde';
        this.descricaoModalMensagemErro = '';
    } else if (status === 500) {
        this.tituloModalMensagemErro = 'Ocorreu um erro. Tente novamente mais tarde';
        this.descricaoModalMensagemErro = '';
    } else {
        this.tituloModalMensagemErro = 'Usuário ou senha inválidos';
        this.descricaoModalMensagemErro = 'Credencias inválidas';
    }
  }

  private mostrarModalDeErro() {
    this.exibirModalDeErro = true;
  }

}
