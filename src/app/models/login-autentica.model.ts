export class LoginAutenticaModel {    
    username: string;
    password: string;

    constructor(usuario: string, senha: string) {
        this.username = usuario;
        this.password = senha;
    }
}