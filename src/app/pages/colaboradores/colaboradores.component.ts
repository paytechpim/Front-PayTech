import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { colaborador } from '@app/models/colaborador.models';
import { SelectOptionModel } from '@app/models/select-option.models';
import { UsuarioModel } from '@app/models/usuario';
import { colaboradorService } from '@app/services/colaborador.service';
import { DialogInfoComponent } from '@app/shared/components/dialog-info/dialog-info.component';
import { GerenciadorLoginComponent } from '@app/shared/components/gerenciador-login/gerenciador-login.component';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent {

  disableSalvar: boolean = false;
  disableEditar: boolean = true;
  disableExcluir: boolean = true;

  ativaGerenciaLogin: boolean = false;

  colaborador = new FormGroup({
    id: new FormControl(),
    nome: new FormControl("", [Validators.required]),
    cpf: new FormControl("", [Validators.required]),
    rg: new FormControl(),
    escolaridade: new FormControl("", [Validators.required]),
    telefone: new FormControl(),
    genero: new FormControl("", [Validators.required]),
    naturalidade: new FormControl("", [Validators.required]),
    num_reservista: new FormControl(),
    nome_mae: new FormControl("", [Validators.required]),
    nome_pai: new FormControl(),
    dt_nascimento: new FormControl("", [Validators.required]),
    estado_civil: new FormControl("", [Validators.required]),
    tituloEleitor: new FormGroup({
      numero_Titulo: new FormControl(),
      secao: new FormControl(),
      zona: new FormControl(),
    }),
    informacoesTrabalhistas: new FormGroup({
      id: new FormControl(""),
      numCtps: new FormControl("", [Validators.required]),
      ufCarteira: new FormControl("", [Validators.required, Validators.maxLength(2)]),
      orgao: new FormControl("", [Validators.required]),
      serie: new FormControl("", [Validators.required]),
      num_pis: new FormControl("", [Validators.required, Validators.maxLength(11)]),
      dt_admissao: new FormControl("", [Validators.required]),
      salario_Bruto: new FormControl("", [Validators.required]),
      qtd_Dependentes: new FormControl("", [Validators.required]),
      opt_Vale_Transporte: new FormControl("0", [Validators.required]),
      funcao: new FormControl("", [Validators.required]),
    }),
    cnh: new FormGroup({
      num_cnh: new FormControl(),
      categoria: new FormControl(),
      dt_emissao: new FormControl(),
      dt_vencimento: new FormControl(),
    }),
    endereco: new FormGroup({
      cep: new FormControl("", [Validators.required]),
      rua: new FormControl("", [Validators.required]),
      numero: new FormControl("", [Validators.required]),
      bairro: new FormControl("", [Validators.required]),
      cidade: new FormControl("", [Validators.required]),
      uf: new FormControl("", [Validators.required]),
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
    { codigo: 3, descricao: 'Víuvo(a)'},
    { codigo: 4, descricao: 'Divorciado(a)'},
    { codigo: 5, descricao: 'Outros' },
  ];

  constructor(
    private _snackBar: MatSnackBar,
    private colaboradorService: colaboradorService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    ) 
  {
  }

  ngAfterViewInit(){
    this.colaborador.controls.id.setValue(this.route.snapshot.params['colaborador']);
    this.onBuscar();
  }

  ngOnInit(): void {
  }

  public onLimparDados() {
    this.colaborador.reset();
  }

  public onBuscar(id?: string) {
    if(this.colaborador.controls.id.value > 0){
      this.colaboradorService.buscarColaborador(this.colaborador.controls.id.value).subscribe(response => {
        if(response.dados.id > 0){
          this.colaborador.setValue(response.dados);
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
    this.colaboradorService.atualizaColaborador(this.colaborador.value).subscribe(response => {
      if(response.sucesso){
        this.colaborador.setValue(response.dados);
        this.buscouColaborador();
        const dialogRef = this.dialog.open(DialogInfoComponent, {
          data: {
            titulo: "Cadastro atualizado", 
            descricao: "Cadastro do colaborador " + this.colaborador.controls.id.value + " \n Atualizado com sucesso!",
            opcao1: "Cadastrar novo",
            opcao2: "Visualizar",
            color1: "btn-light",
            color2: "btn-primary"
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

  public salvarNovo(){
    this.colaboradorService.inserirColaborador(this.colaborador.value).subscribe(response => {
      if(response.sucesso){
        this.colaborador.setValue(response.dados);
        this.buscouColaborador();
        const dialogRef = this.dialog.open(DialogInfoComponent, {
          data: {
            titulo: "Cadastro realizado", 
            descricao: "Cadastro do colaborador " + this.colaborador.controls.id.value + " \n Realizado com sucesso!",
            opcao1: "Cadastrar novo",
            opcao2: "Visualizar",
            color1: "btn-light",
            color2: "btn-primary"
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
        opcao2: "Sim",
        color1: "btn-light",
        color2: "btn-danger"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 2){
        this.colaboradorService.deleteColaborador(this.colaborador.controls.id.value).subscribe(response => {
          if(response.sucesso){
            this.onLimpar();
            this._snackBar.open("Colaborador excluído com sucesso", 'ok', {
              duration: 10000,
            });
          }else{
            this._snackBar.open(response.mensagem, 'ok', {
              duration: 10000,
            });
          }
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
    this.disableExcluir = false;

    this.ativaGerenciaLogin = true;
  }

  public onLimpar(){
    this.colaborador.reset();
    this.colaborador.enable()

    this.disableSalvar = false;
    this.disableEditar = true;
    this.disableExcluir = true;

    this.ativaGerenciaLogin = false;
  }

  public dialogColaboradorCadastrado(){
  }

  public gerenciarLogin(){
    const dialogRef = this.dialog.open(GerenciadorLoginComponent, {
      data: {
        colaboradorId: this.colaborador.controls.id.value,
        nome: this.colaborador.controls.nome.value
      },
    });
  }
}
