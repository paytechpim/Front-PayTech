export class LoginAutenticaModel {
    nome_Usuario: string;
    senha: string;
  
    constructor(nome_Usuario: string, senha: string) {
      this.nome_Usuario = nome_Usuario;
      this.senha = senha;
    }
  }
  