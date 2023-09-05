import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SelectOptionModel } from '@app/models/select-option.models';
import { UsuarioModel } from '@app/models/usuario';

@Component({
  templateUrl: './colaboradores.page.html',
  styleUrls: ['./colaboradores.page.scss'],
})
export class ColaboradoresPage {
  public usuario: UsuarioModel;
  public toppingList: string[] = ['Gerente', 'RH', 'Vendedor', 'Esoque'];
  public usuarios: UsuarioModel[] = [];

  sexoListValue: SelectOptionModel[] = [
    {codigo: 1, descricao: 'Masculino'},
    {codigo: 2, descricao: 'Feminino'},
    {codigo: 3, descricao: 'Outros'},
  ];

  EstadoCivilListValue: SelectOptionModel[] = [
    {codigo: 1, descricao: 'Solteiro(a)'},
    {codigo: 2, descricao: 'Casado(a)'},
    {codigo: 3, descricao: 'Outros'},
  ];

  constructor(private _snackBar: MatSnackBar) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
  }

  public onLimparDados(){
    this.usuario = new UsuarioModel();
  }

  public onBuscar(){
    var user = this.usuarios.find(d => d.codigo === this.usuario.codigo);
    if(user != undefined && user.codigo > 0){
      this.usuario = user;
    }else{
      this.usuario.codigo = 0;
      this._snackBar.open('Colaborador(a) não encontro(a)!', 'ok', {
        duration: 3000,
      });  
    }
  }

  public onSalvar(){
    console.log(this.usuario);
    if(this.usuario.nome == undefined && this.usuario.sobrenome == undefined){
      this._snackBar.open('Preencha todos os campos obrigatórios!', 'ok', {
        duration: 3000,
      });  
      return;
    }

    this.usuario.codigo = this.usuarios.length == 0 ? 1 : this.usuarios[this.usuarios.length - 1].codigo + 1;
    this.usuarios.push(this.usuario);
    this.onLimparDados();
    this._snackBar.open('Salvo com sucesso!', 'ok', {
      duration: 3000,
    });
  }
  
  public onExcluir(){
    if(this.usuario.codigo > 0){
        this.usuarios.splice(this.usuarios.findIndex(d => d.codigo === this.usuario.codigo), 1);
    }
  }

  public onEditar() {

  }

}
