import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { colaborador } from '@app/models/colaborador.models';
import { SelectOptionModel } from '@app/models/select-option.models';
import { UsuarioModel } from '@app/models/usuario';
import { colaboradorService } from '@app/services/colaborador.service';
import { DialogInfoComponent } from '@app/shared/components/dialog-info/dialog-info.component';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent {
  public usuario: UsuarioModel;
  public toppingList: string[] = ['Gerente', 'RH', 'Vendedor', 'Esoque'];
  public usuarios: UsuarioModel[] = [];

  disableSalvar: boolean = false;
  disableEditar: boolean = true;
  disableExcluir: boolean = true;

  colaborador = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    cpf: new FormControl(),
    rg: new FormControl(),
    escolaridade: new FormControl(),
    forma_pagamento: new FormControl(),
    salario: new FormControl(),
    telefone: new FormControl(),
    genero: new FormControl(),
    naturalidade: new FormControl(),
    num_reservista: new FormControl(),
    nome_mae: new FormControl(),
    nome_pai: new FormControl(),
    dt_admissao: new FormControl(),
    dt_nascimento: new FormControl(),
    dt_FGTS: new FormControl(),
    funcao: new FormControl(),
    estado_civil: new FormControl(),
    tituloEleitor: new FormGroup({
      numero_Titulo: new FormControl(),
      secao: new FormControl(),
      zona: new FormControl(),
    }),
    carteiraTrabalho: new FormGroup({
      numCtps: new FormControl(),
      ufCarteira: new FormControl(),
      orgao: new FormControl(),
      serie: new FormControl(),
      cbo: new FormControl(),
    }),
    cnh: new FormGroup({
      num_cnh: new FormControl(),
      categoria: new FormControl(),
      dt_emissao: new FormControl(),
      dt_vencimento: new FormControl(),
    }),
    endereco: new FormGroup({
      cep: new FormControl(),
      rua: new FormControl(),
      numero: new FormControl(),
      bairro: new FormControl(),
      cidade: new FormControl(),
      uf: new FormControl(),
      complemento: new FormControl(),
    })
  });

  sexoListValue: SelectOptionModel[] = [
    { codigo: 1, descricao: 'Masculino' },
    { codigo: 2, descricao: 'Feminino' },
    { codigo: 3, descricao: 'Outros' },
  ];

  EstadoCivilListValue: SelectOptionModel[] = [
    { codigo: 1, descricao: 'Solteiro(a)' },
    { codigo: 2, descricao: 'Casado(a)' },
    { codigo: 3, descricao: 'Outros' },
  ];

  constructor(
    private _snackBar: MatSnackBar,
    private colaboradorService: colaboradorService,
    public dialog: MatDialog,
    ) 
  {
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
  }

  public onLimparDados() {
    this.colaborador.reset();
  }

  public onBuscar(id?: string) {
    if(this.colaborador.controls.id.value > 0){
      this.colaboradorService.buscarColaborador(this.colaborador.controls.id.value).subscribe(response => {
        if(response.id > 0){
          this.colaborador.setValue(response);
          this.buscouColaborador();
        }else{
          this.onLimpar();
          this._snackBar.open('Colaborador(a) não encontro(a)!', 'ok', {
            duration: 10000,
          });
        }
      });
    }else{
      this.onLimpar();
    }
  }

  public onSalvar() {
    if (!this.colaborador.valid) {
      this._snackBar.open('Preencha todos os campos obrigatórios!', 'ok', {
        duration: 3000,
      });
      return;
    }

    if(this.colaborador.controls.id.value > 0){
      this.salvarEdição();
    }else{
      this.salvarNovo();
    }
  }

  public salvarEdição(){

  }

  public salvarNovo(){
    this.colaboradorService.inserirColaborador(this.colaborador.value).subscribe(response => {
      if(response.sucesso){
        this.colaborador.setValue(response.dados);
        const dialogRef = this.dialog.open(DialogInfoComponent, {
          data: {
            titulo: "Cadastro realizado", 
            descricao: "Cadastro do colaborador " + this.colaborador.controls.id.value + " \n Realizado com sucesso!",
            opcao1: "Cadastrar novo",
            opcao2: "Visualizar"
          },
        });
        dialogRef.afterClosed().subscribe(result => {
          if(result == 1){
            this.onLimpar();
          }
        });
      }else{
        this.colaborador.reset();
        this._snackBar.open('Ocorreu um erro ao inserir', 'ok', {
          duration: 10000,
        });
      }
    });
  }

  public onExcluir() {
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {
        titulo: "Atenção!", 
        descricao: "Tem certeza que deseja EXLCUIR o colaborador \n" + this.colaborador.controls.id.value + " - " + this.colaborador.controls.nome.value,
        opcao1: "Não",
        opcao2: "Sim"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 2){
        this.colaboradorService.deleteColaborador(this.colaborador.controls.id.value).subscribe(response => {
          //implementar
          this.onLimpar();
        });

      }
    });
  }

  public onEditar() {
    this.colaborador.enable();
    this.disableSalvar = false;
    this.disableEditar = true;
    this.disableExcluir = false;
  }

  public buscouColaborador(){
    this.colaborador.disable();
    this.colaborador.controls.id.enable();
    this.disableSalvar = true;
    this.disableEditar = false;
    this.disableExcluir = false
  }

  public onLimpar(){
    this.colaborador.reset();

    this.disableSalvar = false;
    this.disableEditar = true;
    this.disableExcluir = true;
  }

  public dialogColaboradorCadastrado(){
  }
}
