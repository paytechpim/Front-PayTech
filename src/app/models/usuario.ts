export class UsuarioModel {
    codigo: number;
    nome: string;
    sobrenome: string;
    nomeSocial: string;
    CPF: string;
    email: string;
    dt_nascimento: Date;
    endereco: EnderecoModel;
    telefone: string;
    telefone_segundario: string;
    cargos: string[];
    comissao: number;
    salario: string;
    dt_pagamento: Date;
    login: string;
    senha: string;

    constructor() {
        this.endereco = new EnderecoModel();
    }
}
export class EnderecoModel{
    logradouro: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    complemento: string;
}