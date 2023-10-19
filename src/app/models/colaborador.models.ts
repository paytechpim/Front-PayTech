    export interface colaborador {
        id: number
        nome: string
        cpf: string
        rg: string
        escolaridade: string
        forma_pagamento: string
        salario: number
        telefone: string
        genero: string
        naturalidade: string
        num_reservista: string
        nome_mae: string
        nome_pai: string
        dt_admissao: Date
        dt_nascimento: Date
        tituloEleitor: TituloEleitor
        carteiraTrabalho: CarteiraTrabalho
        cnh: Cnh
        funcao: string
        estado_civil: string
        endereco: Endereco
    }
    
    export interface TituloEleitor {
        numero_Titulo: string
        secao: string
        zona: string
    }
    
    export interface CarteiraTrabalho {
        numCtps: string
        ufCarteira: string
        orgao: string
        serie: string
        pis: string
    }
    
    export interface Cnh {
        num_cnh: string
        categoria: string
        dt_emissao: Date
        dt_vencimento: Date
    }
    
    export interface Endereco {
        cep: string
        rua: string
        numero: number
        bairro: string
        cidade: string
        uf: string
        complemento: string
    }
    