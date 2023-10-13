import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomvalidationService } from '@app/services/customvalidation.service';
import { LoginService } from '@app/services/login.service';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gerenciador-login',
  templateUrl: './gerenciador-login.component.html',
  styleUrls: ['./gerenciador-login.component.scss']
})
export class GerenciadorLoginComponent {

  login = new FormGroup({
    id: new FormControl(''), 
    id_Funcionario: new FormControl(''), 
    ativo: new FormControl(''),
    nome_Usuario: new FormControl(''),
    senha: new FormControl('', Validators.compose([Validators.required, this.customValidator.patternValidator()])),
    confSenha: new FormControl('', Validators.required),
    tipo: new FormControl(''),
    data_Cadastro: new FormControl('')
  });

  exibirSenha: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<GerenciadorLoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customValidator: CustomvalidationService,
    private loginService: LoginService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    this.login.controls.confSenha.valueChanges.subscribe((x) => {
      if(this.login.controls.senha.value != x){
        this.login.controls.confSenha.setErrors({
          diferente: true
        });
      }else{
        this.login.controls.confSenha.setErrors({
          diferente: false
        });
      }
    });
  }

  ngAfterViewInit(){
    this.buscarFuncionario();

    this.login.controls.id_Funcionario.setValue(this.data.colaboradorId);
    this.login.controls.data_Cadastro.setValue(null);
    this.login.controls.id.setValue(null);
  }

  buscarFuncionario(){
    this.loginService.buscarLoginPorFuncionario(this.data.colaboradorId).subscribe(response => {
      if(response.sucesso){
        if(response.dados){
          response.dados.confSenha = "";
          response.dados.senha = "";
          this.login.setValue(response.dados);
          this.loginExistente(true);
        }else{
          this.loginExistente(false);
        }
      }else{
        this.closeClick();
      }
    });
  }

  onSalvar(){
    // if(this.login.valid){
      if(parseInt(this.login.controls.id.value + "") > 0){
        //update
        if(!this.exibirSenha){
          this.login.controls.senha.setValue("");
          this.login.controls.confSenha.setValue("");
        }
  
        this.login.controls.nome_Usuario.enable();
  
        this.loginService.atualizaLogin(this.login.value).subscribe(response => {
          if(response.sucesso){
            this.closeClick();
            this._snackBar.open('Login atualizado com sucesso', 'ok', {
              duration: 10000,
            });
          }else{
            this._snackBar.open(response.mensagem, 'ok', {
              duration: 10000,
            });
          }
        });
      }else{
        //inset
        this.loginService.inserirLogin(this.login.value).subscribe(response => {
          if(response.sucesso){
            this.closeClick();
            this._snackBar.open('Login criado com sucesso', 'ok', {
              duration: 10000,
            });
          }else{
            this._snackBar.open(response.mensagem, 'ok', {
              duration: 10000,
            });
          }
        });
      }
  }
  
  closeClick(): void {
    this.dialogRef.close();
  }

  loginExistente(existe: boolean = true){
    this.exibirSenha = !existe;
    if(existe){
      this.login.controls.nome_Usuario.disable();
    }else{
      this.login.controls.nome_Usuario.enable();
    }
  }

  onEditarUserName(){
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {
        titulo: "Atenção!", 
        descricao: "Tem certeza que deseja editar o nome de usuário do colaborador ?",
        opcao1: "Cancelar",
        opcao2: "Sim",
        color1: "btn-light",
        color2: "btn-primary"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 2){
        this.login.controls.nome_Usuario.enable();
      }
    });
  }

  onRedefinirSenha(){
    const dialogRef = this.dialog.open(DialogInfoComponent, {
      data: {
        titulo: "Atenção!", 
        descricao: "Tem certeza que deseja REDEFINIR A SENHA do usuário ?",
        opcao1: "Cancelar",
        opcao2: "Sim",
        color1: "btn-light",
        color2: "btn-primary"
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == 2){
        this.exibirSenha = true;
      }else{
        this.exibirSenha = false;
      }
    });
  }

}
