import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SelectOptionModel } from '../@support/interfaces/produtos.interface';

@Component({
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage {
  cor: string;
  corList: SelectOptionModel[] = [
    { codigo: 1, descricao: 'Branco' },
    { codigo: 2, descricao: 'Preto' },
    { codigo: 3, descricao: 'Roxo' },
    { codigo: 4, descricao: 'Gold' },
  ];
  memoria: string;
  memoriaList: SelectOptionModel[] = [
    { codigo: 1, descricao: '64 GB' },
    { codigo: 2, descricao: '128 GB' },
    { codigo: 3, descricao: '256 GB' },
    { codigo: 4, descricao: '512 GB' },
    { codigo: 5, descricao: '1 TB' },
  ];
  grupo: string;
  grupoList: SelectOptionModel[] = [
    { codigo: 1, descricao: 'Smartphone' },
    { codigo: 2, descricao: 'Acessório' },
    { codigo: 3, descricao: 'Carregador' },
    { codigo: 4, descricao: 'Fone' },
  ];
  subgrupo: string;
  subgrupoList: SelectOptionModel[] = [
    { codigo: 1, descricao: 'Iphone' },
    { codigo: 2, descricao: 'Samsung' },
    { codigo: 3, descricao: 'Cabo' },
    { codigo: 4, descricao: 'Pelicula' },
  ];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      descricao: [],
      codigo: [],
      cor: [],
      memoria: [],
      grupo: [],
      subgrupo: [],
      observacao: [],
    });
  }

  submit() {
    console.log('submit', this.form.value);
  }
}
